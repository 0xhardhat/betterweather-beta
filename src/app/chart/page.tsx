"use client";

import { useEffect, useState } from "react";
import { fetchWeatherData } from "@/features/api/fetchweatherdata";
// import { Line } from "react-Chart.js-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);

export default function Chartpage() {
  //   const responses: WeatherApiResponse[] = await axios.get(url, {
  //     params: weather_params,
  //   });
  //   const responses = await fetchWeatherApi(url, params);

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
  const [weatherData_1, setWeatherData_1] = useState<{
    time: string[];
    temperature_2m: number[];
  } | null>(null);
  const [weatherData_2, setWeatherData_2] = useState<{
    time: string[];
    precipitation_probability: number[];
  } | null>(null);
  const [weatherData_3, setWeatherData_3] = useState<{
    time: string[];
    wind_gusts_10m: number[];
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await fetchWeatherData();

        // Process first location. Add a for-loop for multiple locations or weather models
        if (responses) {
          const response = responses;
          // console.log("responses---->", responses);
          // Attributes for timezone and location
          //   const utcOffsetSeconds = response.utcOffsetSeconds();
          const hourly_1 = response[0].hourly;
          const hourly_2 = response[1].hourly;
          const hourly_3 = response[2].hourly;
          // console.log("hourly---->", hourly_1);

          if (hourly_1 && hourly_2 && hourly_3) {
            // const _weatherData = {
            //   hourly: {
            //     time: range(
            //       Number(hourly.time),
            //       Number(hourly.timeEnd),
            //       hourly.interval
            //     ).map((t) => new Date((t + 0) * 1000)),
            //     temperature2m: hourly.variables(0)!.valuesArray()!,
            //   },
            // };
            // console.log("_weatherdata---->", _weatherData);
            const _weatherData_1: {
              time: string[];
              temperature_2m: number[];
            } = {
              time: hourly_1.time,
              temperature_2m: hourly_1.temperature_2m,
            };
            setWeatherData_1(_weatherData_1);
            const _weatherData_2: {
              time: string[];
              precipitation_probability: number[];
            } = {
              time: hourly_2.time,
              precipitation_probability: hourly_2.precipitation_probability,
            };
            setWeatherData_2(_weatherData_2);
            const _weatherData_3: {
              time: string[];
              wind_gusts_10m: number[];
            } = {
              time: hourly_3.time,
              wind_gusts_10m: hourly_3.wind_gusts_10m,
            };
            setWeatherData_3(_weatherData_3);
          }
        } else {
          console.error("Hourly data is not available.");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("weatherData---->", weatherData);
  // }, [weatherData]);

  const data_1 = {
    labels: weatherData_1 ? weatherData_1.time : [],
    datasets: [
      {
        label: "Temperature (°F)",
        data: weatherData_1 ? weatherData_1.temperature_2m : [],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const data_2 = {
    labels: weatherData_2 ? weatherData_2.time : [],
    datasets: [
      {
        label: "Precipitation (″)",
        data: weatherData_2 ? weatherData_2.precipitation_probability : [],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const data_3 = {
    labels: weatherData_3 ? weatherData_3.wind_gusts_10m : [],
    datasets: [
      {
        label: "Wind Gusts (mph)",
        data: weatherData_3 ? weatherData_3.wind_gusts_10m : [],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  const options_1 = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to fill its container
    scales: {
      y: {
        min: -45,
        max: 0,
        title: {
          display: true,
          text: "Temperature (°F)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
    },
  };

  const options_2 = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to fill its container
    scales: {
      y: {
        min: 0,
        max: 10,
        title: {
          display: true,
          text: "Precipitation (″)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
    },
  };

  const options_3 = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to fill its container
    scales: {
      y: {
        min: 0,
        max: 20,
        title: {
          display: true,
          text: "Wind Gust (mph)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
    },
  };

  return (
    <>
      <div className="w-full flex flex-col gap-7 justify-center p-6 my-16">
        <div className="font-bold text-center text-3xl text-white">
          Weather data
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <div className="font-semibold text-center text-xl text-white px-10">
            1. Will Utqiagvik, AK reach a temperature below -40℉ this winter?
          </div>
          <div className="flex justify-center h-[400px]">
            {/* <Line data={data} />
             */}
            {weatherData_1 ? (
              <Line data={data_1} options={options_1} />
            ) : (
              <div className="text-white">Loading...</div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <div className="font-semibold text-center text-xl text-white">
            2. Will Los Angeles, CA get more than 3” of rain in January?
          </div>
          <div className="flex justify-center h-[400px]">
            {/* <Line data={data} />
             */}
            {weatherData_2 ? (
              <Line data={data_2} options={options_2} />
            ) : (
              <div className="text-white">Loading...</div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <div className="font-semibold text-center text-xl text-white  px-10">
            3. Will Mount Washington, NH (windiest place in US), reach a wind
            gust above 200mph this year?
          </div>
          <div className="flex justify-center h-[400px]">
            {/* <Line data={data} />
             */}
            {weatherData_3 ? (
              <Line data={data_3} options={options_3} />
            ) : (
              <div className="text-white">Loading...</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
