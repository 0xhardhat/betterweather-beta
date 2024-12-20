interface Route {
  title: string;
  href: string;
  // component?: React.ComponentType<any>;
  index: boolean;
}

const routes: Route[] = [
  {
    title: "Market",
    href: "/",
    // component: HomePage,
    index: true,
  },
  {
    title: "Activity",
    href: "/activity",
    // component: ProductsPage,
    index: true,
  },
  {
    title: "Leaderboard",
    href: "/leaderboard",
    // component: TeamPage,
    index: true,
  },
  {
    title: "About Us",
    href: "/about-us",
    // component: () => <>Docs</>,
    index: true,
  },
  //   {
  //     title: "Contact Us",
  //     href: "/contact",
  //     // component: () => <>News</>,
  //     children: [],
  //     index: true,
  //   },
];

export default routes;

export const footerroutes: Route[] = [
  {
    title: "Our Story",
    href: "/ourstory",
    // component: ProductsPage,
    index: true,
  },
  {
    title: "Services",
    href: "/services",
    // component: TeamPage,
    index: true,
  },
  {
    title: "Resources",
    href: "/resources",
    // component: () => <>Docs</>,
    index: true,
  },
  {
    title: "Contact Us",
    href: "/contact",
    // component: () => <>News</>,

    index: true,
  },
  {
    title: "Terms",
    href: "/terms",
    // component: () => <>News</>,
    index: true,
  },
];
