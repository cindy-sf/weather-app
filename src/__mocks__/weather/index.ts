import type { Weather } from '@src/types/weather'

export const weather: Weather = {
  coord: {
    lon: 2.3488,
    lat: 48.8534,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'ciel dégagé',
      icon: '01d',
    },
  ],
  base: 'stations',
  main: {
    temp: 17.32,
    feels_like: 17.04,
    temp_min: 16.1,
    temp_max: 18.38,
    pressure: 1018,
    humidity: 74,
    sea_level: 0,
    grnd_level: 0,
    temp_kf: 0,
  },
  visibility: 10000,
  wind: {
    speed: 3.6,
    deg: 10,
  },
  clouds: {
    all: 0,
  },
  dt: 1661843430,
  sys: {
    type: 2,
    id: 2041230,
    country: 'FR',
    sunrise: 1661835866,
    sunset: 1661884716,
  },
  timezone: 7200,
  id: 2988507,
  name: 'Paris',
  cod: 200,
}
