export const Themes = {
  primary: {
    // Base colors
    text: {
      main: 'text-gray-900',
      sub: 'text-gray-600',
      muted: 'text-gray-400',
      header: 'text-gray-800',
    },

    bg: {
      main: 'bg-gray-100',
      card: 'bg-white',
      soft: 'bg-gray-50',
    },

    border: {
      base: 'border-gray-300',
      soft: 'border-gray-200',
    },

    card: {
      bg: 'bg-white',
      hover: 'hover:bg-gray-100',
      shadow: 'shadow-sm',
    },

    kpi: {
      label: 'text-gray-500',
      value: 'text-gray-900',
    },

    progress: {
      track: 'bg-gray-200',
      bar: 'bg-emerald-500',
    },

    button: {
      base: 'rounded-lg transition shadow-sm',
      main: 'bg-gray-900 text-white hover:bg-gray-800',
      outline: 'bg-white border border-gray-300 hover:bg-gray-100',
    },
  },

  dark: {
    text: {
      main: 'text-gray-100',
      sub: 'text-gray-400',
      muted: 'text-gray-500',
      header: 'text-white',
    },

    bg: {
      main: 'bg-slate-900',
      card: 'bg-slate-800',
      soft: 'bg-slate-700',
    },

    border: {
      base: 'border-slate-600',
      soft: 'border-slate-700',
    },

    card: {
      bg: 'bg-slate-800',
      hover: 'hover:bg-slate-700',
      shadow: 'shadow-md shadow-black/30',
    },

    kpi: {
      label: 'text-gray-400',
      value: 'text-white',
    },

    progress: {
      track: 'bg-slate-700',
      bar: 'bg-emerald-400',
    },

    button: {
      base: 'rounded-lg transition shadow-lg',
      main: 'bg-slate-100 text-black hover:bg-white',
      outline: 'bg-slate-800 border border-slate-700 hover:bg-slate-700',
    },
  },
};

export const DEFAULT_THEME = 'primary';

export type Theme = typeof Themes.primary;

export const HEATMAP_COLORS = [
  'bg-gray-200',
  'bg-green-200',
  'bg-green-300',
  'bg-green-400',
  'bg-green-500',
];

export function getHeatmapColor(minutes: number) {
  if (minutes === 0) return HEATMAP_COLORS[0];
  if (minutes < 10) return HEATMAP_COLORS[1];
  if (minutes < 25) return HEATMAP_COLORS[2];
  if (minutes < 40) return HEATMAP_COLORS[3];
  return HEATMAP_COLORS[4];
}
