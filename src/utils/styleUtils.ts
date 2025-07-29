export type PaddingSize = 'small' | 'base' | 'large';
export type ThemeColor = 'base' | 'light' | 'dark';

interface PaddingOptions {
  padding?: PaddingSize;
  paddingTop?: PaddingSize;
  paddingBottom?: PaddingSize;
}

export const getPaddingClass = ({ padding, paddingTop, paddingBottom }: PaddingOptions): string => {
  if (padding) return `py-${padding}`;

  const classes = [];
  if (paddingTop) classes.push(`pt-${paddingTop}`);
  if (paddingBottom) classes.push(`pb-${paddingBottom}`);
  return classes.join(' ');
};

// Matches your .bg-surface, .bg-surface-dark utilities
export const getBackgroundColor = (background: ThemeColor = 'base'): string => {
  const bgColors = {
    base: 'bg-surface',        // maps to --color-background-light
    light: 'bg-surface',       // also maps to --color-background-light
    dark: 'bg-surface-dark'    // maps to --color-background-dark
  };
  return bgColors[background];
};

export const getTextColor = (background: ThemeColor = 'base'): string => {
  const textColors = {
    base: 'text-[var(--color-body-base)]',
    light: 'text-[var(--color-body-light)]',
    dark: 'text-[var(--color-body-dark)]'
  };
  return textColors[background];
};

export const getHeadlineColor = (background: ThemeColor = 'base'): string => {
  const headlineColors = {
    base: 'text-[var(--color-headline)]',
    light: 'text-[var(--color-headline-light)]',
    dark: 'text-[var(--color-headline-dark)]'
  };
  return headlineColors[background];
};

export const getEyebrowColor = (background: ThemeColor = 'base'): string => {
  const eyebrowColors = {
    base: 'text-[var(--color-eyebrow)]',
    light: 'text-[var(--color-eyebrow-light)]',
    dark: 'text-[var(--color-eyebrow-dark)]'
  };
  return eyebrowColors[background];
};

export const getInputBackgroundColor = (background: ThemeColor = 'base'): string => {
  const inputBgColors = {
    base: 'bg-[var(--color-input)]',
    light: 'bg-[var(--color-input-light)]',
    dark: 'bg-[var(--color-input-dark)]'
  };
  return inputBgColors[background];
};

export const getInputTextColor = (background: ThemeColor = 'base'): string => {
  const inputTextColors = {
    base: 'text-[var(--color-input-text)]',
    light: 'text-[var(--color-input-text-light)]',
    dark: 'text-[var(--color-input-text-dark)]'
  };
  return inputTextColors[background];
};
