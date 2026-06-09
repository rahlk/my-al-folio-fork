import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/rahlk",
        linkTitle: "Rahul Krishna on GitHub",
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:imralk@gmail.com",
        linkTitle: "Send an email to Rahul",
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=WGggocoAAAAJ",
        linkTitle: "Rahul Krishna on Google Scholar",
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/rkrsn/",
        linkTitle: "Rahul Krishna on LinkedIn",
        isActive: true,
    },
    {
        name: "Twitter",
        href: "https://twitter.com/r_krsn",
        linkTitle: "Rahul Krishna on Twitter",
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    LinkedIn: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    Twitter: "Twitter",
    RSS: "RSS",
};
