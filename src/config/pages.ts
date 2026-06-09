import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "About",
        subtitle: "",
        isActive: true,
    },
    blog: {
        title: "News",
        subtitle: "Announcements and updates.",
        isActive: true,
    },
    publications: {
        title: "Publications",
        subtitle: "Peer-reviewed research papers.",
        isActive: true,
    },
    talks: {
        title: "Talks",
        subtitle: "",
        isActive: false,
    },
    projects: {
        title: "Projects",
        subtitle: "",
        isActive: false,
    },
    teaching: {
        title: "Teaching",
        subtitle: "",
        isActive: false,
    },
    tags: {
        title: "Tags",
        subtitle: "Explore content by topic.",
        isActive: true,
    },
    cv: {
        title: "Curriculum Vitae",
        subtitle: "Academic and professional history.",
        isActive: true,
    },
};
