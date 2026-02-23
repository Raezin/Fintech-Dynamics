export const theme = {
  colors: {
    primary: '#50a7c3',
    primaryLight: '#2f697f',
    primaryDark: '#004ba0',
    secondary: '#9c27b0',
    secondaryLight: '#d05ce3',
    secondaryDark: '#6a0080',
    background: '#f9fafb',
    paper: '#ffffff',
    textPrimary: '#111827',
    textSecondary: '#6b7280',
    textDisabled: '#9ca3af',
    divider: '#e5e7eb',
    error: '#dc2626',
    warning: '#f59e0b',
    success: '#16a34a',
    info: '#0284c7',
  },
  
  typography: {
    h1: 'text-h1',
    h2: 'text-h2',
    h3: 'text-h3',
    h4: 'text-h4',
    h5: 'text-h5',
    h6: 'text-h6',
    body1: 'text-body1',
    body2: 'text-body2',
    button: 'text-button',
  },
  
  borderRadius: {
    default: 'rounded-mui-default',
    medium: 'rounded-mui-lg',
    large: 'rounded-mui-xl',
  },
  
  shadows: {
    card: 'shadow-mui-card',
    appbar: 'shadow-mui-appbar',
    button: 'shadow-mui-button',
  },
}

// Helper function to get color class
export const getColorClass = (color, variant = 'DEFAULT') => {
  if (variant === 'text') {
    return `text-${color}`;
  }
  if (variant === 'bg') {
    return `bg-${color}`;
  }
  if (variant === 'border') {
    return `border-${color}`;
  }
  return `text-${color}`;
}

// Spacing scale
export const spacing = {
  xs: '2',
  sm: '3',
  md: '4',
  lg: '6',
  xl: '8',
}