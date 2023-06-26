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
    intro: "What's Kaleidoscope?",
    introParagraph:
      "Kaleidoscope is a club for other Khoury Clubs! We're a collection of programs to help you build the best clubs you can for students at Khoury. To do this, we provide a variety of ways to connect you with students, additional resources, employers, and other clubs.",
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
    headline: "Manage your club",
    introContent: "We've collected numerous resources, including our own programs, to help you manage your club and make it as compelling as possible to students at Northeastern."
  },
};

export default strings;
