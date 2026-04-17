export const uiTheme = {
  //主色（主 CTA、强调）
  primary: '#1d4ed8',
  primarySoft: 'rgba(29,78,216,0.08)',
  primaryBorderSoft: 'rgba(29,78,216,0.25)',

  //辅助色（装饰/图标强调）
  accent: '#2563eb',

  //背景层级色
  bg: '#ffffff',
  bgElevated: '#f8fafc',
  bgSubtle: '#f4f5f7',

  //文本层级色
  text: '#0f172a',
  textMuted: '#4b5563',
  textSubtle: '#6b7280',

  //分隔/边框色
  border: '#e5e7eb',
  borderSoft: 'rgba(229,231,235,0.9)',

  //强调/CTA
  cta: {
    primaryBg: '#1d4ed8',
    primaryText: '#ffffff',
    primaryBorder: '#1d4ed8',

    ghostBg: '#ffffff',
    ghostText: '#111827',
    ghostBorder: '#e5e7eb',
  },
} as const;
