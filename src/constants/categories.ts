interface Category {
  title: string;
  value: string;
  url: string;
  lighturl: string;
}

const categories: Category[] = [
  {
    title: "All",
    value: "all markets",
    url: "",
    lighturl: "",
  },
  {
    title: "Precipitation",
    value: "precipitation",
    url: "/category/precipitation.svg",
    lighturl: "/category/precipitation-lightclicked.svg",
  },
  {
    title: "Temperature",
    value: "temperature",
    url: "/category/temperature.svg",
    lighturl: "/category/temperature-lightclicked.svg",
  },
  {
    title: "Wind",
    value: "wind",
    url: "/category/wind.svg",
    lighturl: "/category/wind-lightclicked.svg",
  },
  {
    title: "Extreme Weather",
    value: "extreme weather",
    url: "/category/extreme weather.svg",
    lighturl: "/category/extreme weather-lightclicked.svg",
  },
  {
    title: "Ski resorts",
    value: "ski resorts",
    url: "/category/ski resorts.svg",
    lighturl: "/category/ski resorts-lightclicked.svg",
  },
];

export default categories;
