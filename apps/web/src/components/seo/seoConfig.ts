import type { Lang } from '../i18n/locale';

export type PageKey = 'home' | 'ai' | 'vip' | 'shop';

export const seoTitle: Record<Lang, Record<PageKey, string>> = {
  zh: {
    home: '五行七彩网络 · 高端私人定制 · AI 与 VIP 占卜',
    ai: 'AI 占卜 · 五行七彩网络',
    vip: 'VIP 人工占卜 · 五行七彩网络',
    shop: '商城 · 五行七彩网络',
  },
  en: {
    home: 'Five-Element Fortune Network · Premium AI + VIP Fortune',
    ai: 'AI Fortune · Five-Element Fortune Network',
    vip: 'VIP Human Fortune · Five-Element Fortune Network',
    shop: 'Shop · Five-Element Fortune Network',
  },
};

export const seoDescription: Record<Lang, Record<PageKey, string>> = {
  zh: {
    home: '面向海外华人/华侨的高端私人定制服务：AI占卜入口、VIP人工入口与商城展示。',
    ai: 'AI 占卜展示层：主题选择与结构化建议。',
    vip: 'VIP 人工占卜展示层：信任流程与深度沟通入口。',
    shop: '商城展示层：服务相关商品入口。',
  },
  en: {
    home: 'Premium private customization for overseas Chinese communities: AI fortune, VIP human, and shop entries.',
    ai: 'AI fortune display layer: choose a theme and get structured guidance.',
    vip: 'VIP human display layer: trust flow and deeper communication entry.',
    shop: 'Shop display layer: service-related products entry.',
  },
};

export function getSeo(lang: Lang, page: PageKey) {
  return {
    title: seoTitle[lang][page],
    description: seoDescription[lang][page],
  };
}
