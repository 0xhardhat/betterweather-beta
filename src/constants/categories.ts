interface Category {
  title: string;
  value: string;
  url: string;
  // index: boolean;
}

const categories: Category[] = [
  {
    title: "All",
    value: "all markets",
    url: "",
    // component: HomePage,
    // index: true,
  },
  {
    title: "Precipitation",
    value: "precipitation",
    url: "/category/precipitation.svg",
    // component: HomePage,
    // index: true,
  },
  {
    title: "Temperature",
    value: "temperature",
    url: "/category/temperature.svg",
    // component: ProductsPage,
    // index: true,
  },
  {
    title: "Wind",
    value: "wind",
    url: "/category/wind.svg",
    // component: TeamPage,
    // index: true,
  },
  {
    title: "Extreme Weather",
    value: "extreme weather",
    url: "/category/extreme weather.svg",
    // component: () => <>Docs</>,
    // index: true,
  },
  {
    title: "Ski resorts",
    value: "ski resorts",
    url: "/category/ski resorts.svg",
    // component: () => <>Docs</>,
    // index: true,
  },
];

export default categories;
