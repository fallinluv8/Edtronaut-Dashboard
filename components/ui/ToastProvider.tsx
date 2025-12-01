'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ToastType = 'success' | 'error';

interface ToastState {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextProps {
  showToast: (msg: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const showToast = (message: string, type: ToastType = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2500);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast Container */}
      <div className='fixed top-4 right-4 space-y-2 z-9999'>
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              'px-4 py-2 rounded shadow-lg text-sm animate-fade-in-up transition-all',
              t.type === 'success'
                ? 'bg-emerald-500 text-white'
                : 'bg-red-500 text-white'
            )}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside ToastProvider');
  return ctx;
}
