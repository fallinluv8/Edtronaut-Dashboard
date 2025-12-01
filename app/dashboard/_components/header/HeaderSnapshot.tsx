'use client';
import Image from 'next/image';
import { mockUser } from '@/data/user';
import { KpiCard } from './KpiCard';
import { useTheme } from '@/context/ThemeContext';
import { cnTheme } from '@/lib/utils';
import { SunIcon } from '../../../../public/icons/SunIcon';
import { MoonIcon } from '../../../../public/icons/MoonIcon';

export function HeaderSnapshot() {
  const { theme, themeName, toggleTheme } = useTheme();
  const kpis = [
    { label: 'Simulations đã bắt đầu', value: mockUser.startedSimulations },
    { label: 'Simulations hoàn thành', value: mockUser.completedSimulations },
    { label: 'Điểm trung bình', value: mockUser.averageScore },
    { label: 'Streak ngày học', value: mockUser.streakDays },
    {
      label: 'Career Activation Rate',
      value: `${mockUser.careerActivationRate}%`,
    },
  ];

  return (
    <section
      aria-labelledby='dashboard-header-title'
      className={cnTheme(
        'relative rounded-xl p-4 md:p-6 transition',
        theme.card.bg,
        theme.card.shadow,
        theme.border.base
      )}
    >
      <button
        onClick={toggleTheme}
        className={cnTheme(
          'absolute right-0 top-0 flex items-center gap-1 px-2 py-1 rounded-md transition text-xs font-medium',
          theme.card.hover
        )}
        title='Đổi giao diện'
      >
        {themeName === 'dark' ? (
          <>
            <SunIcon className='h-5 w-5 text-yellow-400' />
            <span className='text-[11px] text-yellow-500'>Sáng</span>
          </>
        ) : (
          <>
            <MoonIcon className='h-5 w-5 text-slate-700' />
            <span className='text-[11px] text-slate-700'>Tối</span>
          </>
        )}
      </button>
      <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
        <div className='flex items-center gap-4'>
          <Image
            src={mockUser.avatar}
            alt={mockUser.name}
            width={48}
            height={48}
            className='h-12 w-12 rounded-full object-cover'
          />
          <div>
            <h1
              id='dashboard-header-title'
              className={cnTheme(
                'text-xl font-semibold md:text-2xl',
                theme.text.header
              )}
            >
              Chào mừng trở lại, {mockUser.name}
            </h1>
            <p className={cnTheme('text-sm', theme.text.sub)}>
              Cùng xem hôm nay bạn đang ở đâu trên hành trình nghề nghiệp nhé.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-3 text-sm sm:grid-cols-3 lg:grid-cols-5'>
          {kpis.map((item, i) => (
            <KpiCard key={i} label={item.label} value={item.value} />
          ))}
        </div>
      </div>
    </section>
  );
}
