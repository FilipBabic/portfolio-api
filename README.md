# portfolio-api
A Node.js API deployed on Heroku, used on my portfolio website https://filipbabic.github.io. Features user authentication and CRUD operations for notes. Email validation coming soon. Built to practice and demonstrate backend development skills to recruiters.

## Features

- **User Authentication**
  - Secure user authentication to manage access.
  
- **Notes Management**
  - Create, read, update, and delete notes for authenticated users.

- **Weather Management**
  - Retrieves current weather data from OpenWeatherMap API.
  - Provides endpoints for fetching weather data and updating user preferences.
  
- **Future Enhancements**
  - Email validation for user accounts.
  - and more..

## Purpose

The main purpose of this project is to practice and showcase my skills to potential recruiters. It demonstrates my ability to build and deploy a full-fledged API with user management and note-taking functionalities.

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB (Atlas or local instance)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/FilipBabic/portfolio-api.git
    cd portfolio-api
    ```

2. Install dependencies:
    ```bash
    npm install express mongoose jsonwebtoken bcryptjs dotenv axios
    ```

3. Create a `.env` file in the root directory with the following content and:
    ```plaintext
    MONGODB_URI=your_mongodb_uri
    PORT=3000
    JWT_SECRET=your_JWT_SECRET
    WEATHER_API=your_openweathermap_api_key
    ```

4. Replace your_mongodb_uri, your_JWT_SECRET and your_openweathermap_api_key with your actual data.

5. Start the server:
    ```bash
    npm start
    ```

### Usage

- **Register a new user:**
    ```bash
    POST /api/signup
    ```
  
- **Login:**
    ```bash
    POST /api/login
    ```
  
- **Create a note:**
    ```bash
    POST /api/notes
    ```
  
- **Get user notes:**
    ```bash
    GET /api/notes
    ```
  
- **Update a note:**
    ```bash
    PUT /api/notes/:id
    ```
  
- **Delete a note:**
    ```bash
    DELETE /api/notes/:id
    ```

- **Get Weather from openWeather API:**

    **URL:** `/weather`

    **Method:** `GET`

    **Query Parameters:**
    - `lat` (required): Latitude of the location.
    - `lon` (required): Longitude of the location.
    - `auth-token` (required): Unique identifier for the user. The user must be logged in to use this feature

    **Example Request:**
    ```sh
    curl "https://arcane-earth-56962-72540aa16b2d.herokuapp.com/api/weather?lat=37.7749&lon=-122.4194"
    ```

## Deployment

The API is deployed on Heroku. You can access the live API here: [https://arcane-earth-56962-72540aa16b2d.herokuapp.com/](https://arcane-earth-56962-72540aa16b2d.herokuapp.com/)

## Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

You can contact me via [my website](https://filipbabic.github.io) for any questions or feedback.
