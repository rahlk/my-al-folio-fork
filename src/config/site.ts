import type { SiteConfig, ThemeConfig, SettingsConfig, UmamiAnalyticsConfig, AnalyticsConfig } from "../types";

export const SITE: SiteConfig = {
    website: "https://rkrsn.us/",
    author: "Rahul Krishna",
    desc: "Research Staff Member at IBM Research (Application Modernization). Machine Learning × Programming Languages for cloud-native software.",
    title: "Rahul Krishna",
    ogImage: "rkrsn.jpg",
    postPerPage: 10,
    favicon: "/favicon.svg",
    lang: "en",
};

export const THEME_CONFIG: ThemeConfig = {
    lightAndDark: true,
    themeLight: "light_default",
    themeDark: "dark_notepad",
};

export const SETTINGS: SettingsConfig = {
    showTagsInNavbar: true,
    showRSSInFooter: true,
    addDevToolsInProduction: false,
};

const umami: UmamiAnalyticsConfig = {
    websiteId: "",
    src: "https://cloud.umami.is/script.js",
};

export const ANALYTICS: AnalyticsConfig = {
    ga4Id: "",
    umami: umami,
};
