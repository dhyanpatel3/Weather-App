# Weather App

A simple and elegant weather application built with React that provides real-time weather information for any city.

-----

## Features

  * **Current Weather Data:** Get up-to-date weather information for any city around the globe.
  * **Search Functionality:** Easily search for a city to get its weather forecast.
  * **Dynamic UI:** The background and icons change dynamically based on the weather conditions (hot, cold, or rainy).
  * **Detailed Information:** Provides comprehensive data including temperature, humidity, min/max temperature, and what the weather feels like.
  * **User-Friendly Interface:** A clean and intuitive user interface built with Material-UI.

-----

## Technologies Used

  * **React:** A JavaScript library for building user interfaces.
  * **Vite:** A fast build tool for modern web development.
  * **Material-UI:** A popular React UI framework for faster and easier web development.
  * **OpenWeatherMap API:** Used to fetch weather data.

-----

## Setup and Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/weather-app.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Get a free API Key at [https://openweathermap.org/api](https://openweathermap.org/api)
4.  Enter your API in `src/SearchBox.jsx`
    ```javascript
    const API_KEY = "YOUR_API_KEY";
    ```
5.  Run the app
    ```sh
    npm run dev
    ```

-----

## Usage

Simply type the name of a city in the search box and click the "Search" button. The weather information for the entered city will be displayed in a card below the search box.

-----

## Author

  * **Dhyan Patel**
