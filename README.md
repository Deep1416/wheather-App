# Deependra's Weather App

## Overview

Deependra's Weather App is a dynamic React-based web application designed to fetch and display weather information for a set of predefined cities. Users can retrieve weather data, update descriptions, delete entries, and search for specific cities. When a city is searched, its row is highlighted for 3 seconds if found.

## Features

- Fetch weather data for predefined cities.
- Display comprehensive weather details, including city name, description, temperature, pressure, and data age.
- Update the description for each city directly in the table.
- Delete city weather entries from the list.
- Search for a city and highlight the corresponding row if it exists.

## Usage

### Get Weather Data
- Click the "Get Weather" button to fetch weather data for predefined cities (London, New York, Los Angeles, Las Vegas).
- The fetched data will be displayed in a table on the right side of the interface.

### Update Description
- Edit the description directly within the table, and it will be updated in the application's state.

### Delete a City
- Click the "Delete" button in the respective row to remove the city's weather data from the table.
- Deleted cities can be re-added by clicking the "Get Weather" button again.

### Search for a City
- Enter a city name in the search bar and click the "Search" button.
- If the city is found in the table, its row will be highlighted in yellow for 3 seconds.

