// AUTO GENERATED FILE - DO NOT EDIT

const classNames = {
  'clickable': 'clickable',
  'dark': 'dark',
  'error-code': 'error-code',
  'error-container': 'error-container',
  'error-content': 'error-content',
  'error-heading': 'error-heading',
  'error-image': 'error-image',
  'error-message': 'error-message',
  'error-meta': 'error-meta',
  'heading-large': 'heading-large',
  'heading-max': 'heading-max',
  'heading-medium': 'heading-medium',
  'heading-small': 'heading-small',
  'hero': 'hero',
  'limit-width': 'limit-width',
  'line-break': 'line-break',
  'menu': 'menu',
  'menu-bottom-left': 'menu-bottom-left',
  'menu-bottom-right': 'menu-bottom-right',
  'menu-brand': 'menu-brand',
  'menu-brand-container': 'menu-brand-container',
  'menu-brand-image': 'menu-brand-image',
  'menu-button': 'menu-button',
  'menu-container': 'menu-container',
  'menu-top-left': 'menu-top-left',
  'menu-top-right': 'menu-top-right',
  'node-bg': 'node-bg',
  'node-bg-node': 'node-bg-node',
  'parallax': 'parallax',
  'scrollpop': 'scrollpop',
  'text': 'text',
  'theme-bubble': 'theme-bubble'
} as const;

export type ClassName = (keyof typeof classNames);
export type PossibleClassName = ClassName | false | null | undefined;

export function useClasses(...args: PossibleClassName[]): string {
  const validClass = (arg: PossibleClassName) => !!(arg && arg in classNames);
  const validClasses = args.filter(validClass) as ClassName[];
  return validClasses.map(arg => classNames[arg]).join(' ');
}

