export type Lang = 'zh' | 'en';

export const dict: Record<Lang, Record<string, string>> = {
  zh: {
    siteName: '五行七彩网络 · 高端私人定制',
    heroTitle: '面向海外华人/华侨的高端私人定制 · AI 与人工占卜服务',
    heroSubtitle: '专业咨询 · 可信流程 · 合规表达 · 双语体验',

    brandValuesTitle: '品牌价值',
    brandValues1: '审慎风控与合规表达',
    brandValues2: '可追溯的沟通流程与用户信任',
    brandValues3: 'AI 首问 + VIP 人工深度',

    entryTitle: '三大入口',
    entryAi: 'AI 占卜',
    entryVip: 'VIP 人工占卜',
    entryShop: '商城',
    entryCta: '立即开始',

    trustTitle: '你将获得什么',
    trustStep1: '1) 选择入口：AI / VIP / 商城',
    trustStep2: '2) 明确免责声明与隐私说明',
    trustStep3: '3) 以清晰边界完成咨询体验',

    faqTitle: '常见问题（简版）',
    faqQ1: '需要先了解免责声明吗？',
    faqA1: '是的。我们将提供免责声明、隐私说明与服务边界入口。',
    faqQ2: '是否支持双语？',
    faqA2: '支持。首页与核心入口提供 zh / en 切换。',
    faqQ3: 'VIP 人工是什么？',
    faqA3: 'VIP 人工为需要更深度沟通的用户提供个性化服务入口（展示层为主）。',

    disclaimerLabel: '服务免责声明',
    privacyLabel: '隐私说明',
    refundLabel: '退款/服务边界说明',

    footerRights: '版权所有 · 五行七彩网络',

    navHome: '首页',
    navAi: 'AI 占卜',
    navVip: 'VIP 人工占卜',
    navShop: '商城',

    aiPageTitle: 'AI 占卜（展示层）',
    aiPageLead: '选择一个主题，获得结构化的占卜建议与后续引导。',
    vipPageTitle: 'VIP 人工占卜（展示层）',
    vipPageLead: '对需要深度沟通的用户提供 VIP 人工入口与信任流程。',
    shopPageTitle: '商城（展示层）',
    shopPageLead: '提供服务相关的商品入口（展示层为主）。',

    langToggleZh: '中文',
    langToggleEn: 'EN',
    seoTagline: '高端 AI 与 VIP 人工占卜 · 双语体验 · 合规表达'
  },
  en: {
    siteName: 'Five-Element Fortune Network · Premium Private Customization',
    heroTitle: 'Premium private fortune services for overseas Chinese communities · AI + VIP human',
    heroSubtitle: 'Trustworthy process · compliant communication · bilingual experience',

    brandValuesTitle: 'Brand Values',
    brandValues1: 'Careful risk control & compliant wording',
    brandValues2: 'Transparent, traceable consultation flow',
    brandValues3: 'AI first + VIP human deep dive',

    entryTitle: 'Core Entrances',
    entryAi: 'AI Fortune',
    entryVip: 'VIP Human Fortune',
    entryShop: 'Shop',
    entryCta: 'Get started',

    trustTitle: 'What you’ll get',
    trustStep1: '1) Choose: AI / VIP / Shop',
    trustStep2: '2) Review disclaimer & privacy',
    trustStep3: '3) Clear boundaries for a confident experience',

    faqTitle: 'FAQ (Short)',
    faqQ1: 'Do I need to read the disclaimer first?',
    faqA1: 'Yes. We provide entry links for disclaimer, privacy, and service boundaries.',
    faqQ2: 'Do you support bilingual?',
    faqA2: 'Yes. Homepage and core entries support zh / en switching.',
    faqQ3: 'What is VIP human?',
    faqA3: 'VIP human provides personalized access for deeper communication (display layer first).',

    disclaimerLabel: 'Service Disclaimer',
    privacyLabel: 'Privacy Notice',
    refundLabel: 'Refund / Service Boundary',

    footerRights: 'All rights reserved · Five-Element Fortune Network',

    navHome: 'Home',
    navAi: 'AI Fortune',
    navVip: 'VIP Human',
    navShop: 'Shop',

    aiPageTitle: 'AI Fortune (Display Layer)',
    aiPageLead: 'Choose a theme to receive structured fortune suggestions and guidance.',
    vipPageTitle: 'VIP Human Fortune (Display Layer)',
    vipPageLead: 'A VIP human entry and trust flow for users who need deeper communication.',
    shopPageTitle: 'Shop (Display Layer)',
    shopPageLead: 'Service-related product entries (display layer first).',

    langToggleZh: '中文',
    langToggleEn: 'EN',
    seoTagline: 'Premium AI + VIP Human fortune · bilingual · compliant communication'
  },
};

export function t(key: string, lang: Lang) {
  return dict[lang][key] ?? key;
}
