# HodlInfo

HodlInfo is a web application that fetches cryptocurrency ticker data from the WazirX API, sorts it based on volume, and stores the top 10 results in a PostgreSQL database. The results are then displayed in a responsive web interface.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Code Structure](#code-structure)
- [Conclusion](#conclusion)

## Overview

This project demonstrates the ability to fetch, process, and display real-time data from an API, as well as manage sensitive information securely using environment variables.

## Features

- Fetches cryptocurrency data from the WazirX API.
- Sorts data by volume and stores the top 100 results in a PostgreSQL database.
- Displays data in a responsive web interface.
- Dark and light theme toggle button.
- Dropdown menus for currency and cryptocurrency selection.

## Demo

Here is a screenshot of the database showing the top 10 results based on volume:
<img width="1136" alt="Screenshot 2024-07-05 at 1 54 34 PM" src="https://github.com/akshayjalluri6/QuadB-Technologies/assets/141540026/a1be3653-19dd-46d7-acc9-5728fc83b332">



## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/hodlinfo.git
   cd hodlinfo
   ```

2. **Install the dependencies:**
   ```sh
   npm install
   ```

3. **Create a `.env` file in the root directory and add the following environment variables:**
   ```dotenv
   DATABASE_URL=your_database_connection_string
   PORT=your_port_number
   ```

4. **Start the server:**
   ```sh
   npm start
   ```

5. **Open a web browser and navigate to `http://localhost:your_port_number` to view the application.**

## Usage

- The main data fetching and processing happens in the `/` route.
- The `/api/tickers` route fetches data from the PostgreSQL database and displays it on the web interface.
- You can switch between dark and light themes using the toggle button on the top right.
- Dropdown menus allow you to select different currencies and cryptocurrencies.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Axios
- HTML/CSS/JavaScript
- Bootstrap (for responsive design)
- dotenv (for environment variables)

## License

This project is licensed under the MIT License.

## Code Structure

- **server.js**: Main server file handling API requests and database operations.
- **public/**: Contains static files like HTML, CSS, and JavaScript.
  - **index.html**: Main HTML file for the web interface.
  - **styles.css**: CSS file for styling the web interface.
  - **script.js**: JavaScript file for client-side logic.
- **.env**: Environment variables (not included in the repository for security reasons).
- **.gitignore**: Specifies files and directories to be ignored by Git.

## Conclusion

This project demonstrates the ability to integrate multiple technologies to create a functional and responsive web application. Thank you for reviewing my submission.
