import axios from "axios";

const temperature_params_Utqiagvik = {
  latitude: 71.2906,
  longitude: -156.7887,
  hourly: "temperature_2m",
  temperature_unit: "fahrenheit",
  start_date: "2024-12-22",
  end_date: "2024-12-22",
  models: "gfs_seamless",
};

const precipitation_params_Los_Angeles = {
  latitude: 34.0522,
  longitude: -118.2437,
  hourly: ["precipitation_probability", "precipitation"],
  temperature_unit: "fahrenheit",
  precipitation_unit: "inch",
  start_date: "2025-01-01",
  end_date: "2025-01-01",
  models: "gfs_seamless",
};

const wind_params_Mt_Washington = {
  latitude: 44.2705,
  longitude: -71.3035,
  current: "wind_gusts_10m",
  hourly: "wind_gusts_10m",
  temperature_unit: "fahrenheit",
  wind_speed_unit: "mph",
  precipitation_unit: "inch",
  start_date: "2024-12-25",
  end_date: "2024-12-25",
  models: "gfs_seamless",
};

const url = "https://api.open-meteo.com/v1/forecast";

// Helper function to form time ranges

// const range = (start: number, stop: number, step: number) =>
//   Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// Proecess first location. Add a for-loop for multiple locations or weather models
//   const response = responses[0];

// Attributes for timezone and location
//   const utcOffsetSeconds = response.utcOffsetSeconds();
//   const timezone = response.timezone();
//   const timezoneAbbreviation = response.timezoneAbbreviation();
//   const latitude = response.latitude();
//   const longitude = response.longitude();

//   const hourly = response.hourly();

export const fetchWeatherData = async () => {
  try {
    // Create an array of promises for each request
    const requests = [
      axios.get(url, { params: temperature_params_Utqiagvik }),
      axios.get(url, { params: precipitation_params_Los_Angeles }),
      axios.get(url, { params: wind_params_Mt_Washington }), // This seems to be a duplicate; consider if it's necessary
    ];

    // Use Promise.all to fetch all requests concurrently
    const responses = await Promise.all(requests);
    // Return the data from each response
    return responses.map((response) => response.data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
