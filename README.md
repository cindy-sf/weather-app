# Weather app 🌞

## Table of contents :

- [Prerequisite](#prerequisite)
- [Installation](#installation)

## Prerequisite

- Have [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) installed in your machine (this web app is running with node v14.17.0)
- This project is build with Open Weathermap. You have to generate an api key for the proper operation of the application.
  You can do it over [here](https://home.openweathermap.org/api_keys)

## Installation

- Clone the project `git clone https://github.com/cindy-sf/weather-app.git`
- Use the good version of node : `nvm use`
- Now, adding the generated Open Weathermap api key :
  For this, create a `.env.local` file in the root of the project, and add this following line :

```javascript
OPEN_WEATHERMAP_API_KEY = 'YOUR_OPEN_WEATHERMAP_API_KEY'
```

- Finally, install the dependencies by running `npm i`.
- Congratulations, you are ready to launch the project 🎉.
  Now run `npm run dev`.

Enjoy 😄 !
