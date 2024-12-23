// export const data =  (weatherData) = {
//     labels: weatherData ? weatherData.time : [],
//     datasets: [
//       {
//         label: "Temperature (°F)",
//         data: weatherData ? weatherData.temperature_2m : [],
//         borderColor: "rgba(75, 192, 192, 1)",
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         fill: true,
//         tension: 0.1,
//       },
//     ],
//   };

//  export const options_1 = {
//     responsive: true,
//     maintainAspectRatio: false, // Allow the chart to fill its container
//     scales: {
//       y: {
//         min: -45,
//         max: 0,
//         title: {
//           display: true,
//           text: "Temperature (°F)",
//         },
//       },
//       x: {
//         title: {
//           display: true,
//           text: "Time",
//         },
//       },
//     },
//   };