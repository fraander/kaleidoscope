export type target = "_blank" | "_self" | "_parent" | "_top" | "framename";

export const strings = {
  home: {
    club_name: "Kaleidoscope",
    tagline: "We're here to help you ...",
    links: [
      {
        title: "Join a club",
        destination:
          "https://www.khoury.northeastern.edu/about/clubs-and-organizations/",
        target: "_blank",
      },
      {
        title: "Manage an org",
        destination: "/manage",
        target: "_self",
      },
    ],
  },
  manage: {
    links: [
      {
        title: "Join a club",
        destination:
          "https://www.khoury.northeastern.edu/about/clubs-and-organizations/",
        target: "_blank",
      },
    ],
  },
};

export default strings;
