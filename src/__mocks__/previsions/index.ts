import type { Previsions } from '@src/types/previsions'

export const formattedPrevisions: Previsions['list'] = [
  {
    dt: 1661796000,
    main: {
      temp: 27.85,
      feels_like: 27.81,
      temp_min: 27.85,
      temp_max: 28.02,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 1010,
      humidity: 44,
      temp_kf: -0.17,
    },
    weather: [
      {
        id: 800,
        main: 'Clear',
        description: 'ciel dégagé',
        icon: '01d',
      },
    ],
    clouds: { all: 0 },
    wind: { speed: 4.79, deg: 16, gust: 7.26 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'd' },
    dt_txt: '2022-08-29 18:00:00',
  },
  {
    dt: 1661817600,
    main: {
      temp: 22.92,
      feels_like: 22.47,
      temp_min: 20.46,
      temp_max: 22.92,
      pressure: 1016,
      sea_level: 1016,
      grnd_level: 1013,
      humidity: 46,
      temp_kf: 2.46,
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'partiellement nuageux',
        icon: '03n',
      },
    ],
    clouds: { all: 33 },
    wind: { speed: 4.34, deg: 30, gust: 11.05 },
    visibility: 10000,
    pop: 0,
    sys: { pod: 'n' },
    dt_txt: '2022-08-30 00:00:00',
  },
]

export const previsions: Previsions = {
  cod: '200',
  message: 0,
  cnt: 5,
  list: [
    {
      dt: 1661796000,
      main: {
        temp: 27.85,
        feels_like: 27.81,
        temp_min: 27.85,
        temp_max: 28.02,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1010,
        humidity: 44,
        temp_kf: -0.17,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'ciel dégagé',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 4.79,
        deg: 16,
        gust: 7.26,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-29 18:00:00',
    },
    {
      dt: 1661806800,
      main: {
        temp: 26.4,
        feels_like: 26.4,
        temp_min: 23.51,
        temp_max: 26.4,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1012,
        humidity: 42,
        temp_kf: 2.89,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'partiellement nuageux',
          icon: '03n',
        },
      ],
      clouds: {
        all: 25,
      },
      wind: {
        speed: 5.22,
        deg: 36,
        gust: 11.88,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-29 21:00:00',
    },
    {
      dt: 1661817600,
      main: {
        temp: 22.92,
        feels_like: 22.47,
        temp_min: 20.46,
        temp_max: 22.92,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1013,
        humidity: 46,
        temp_kf: 2.46,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'partiellement nuageux',
          icon: '03n',
        },
      ],
      clouds: {
        all: 33,
      },
      wind: {
        speed: 4.34,
        deg: 30,
        gust: 11.05,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-30 00:00:00',
    },
    {
      dt: 1661828400,
      main: {
        temp: 18.56,
        feels_like: 17.83,
        temp_min: 18.56,
        temp_max: 18.56,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1012,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'partiellement nuageux',
          icon: '03n',
        },
      ],
      clouds: {
        all: 43,
      },
      wind: {
        speed: 3.95,
        deg: 26,
        gust: 10.19,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2022-08-30 03:00:00',
    },
    {
      dt: 1661839200,
      main: {
        temp: 18.22,
        feels_like: 17.48,
        temp_min: 18.22,
        temp_max: 18.22,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1013,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'nuageux',
          icon: '04d',
        },
      ],
      clouds: {
        all: 72,
      },
      wind: {
        speed: 3.61,
        deg: 23,
        gust: 7.9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2022-08-30 06:00:00',
    },
  ],
  city: {
    id: 2988507,
    name: 'Paris',
    coord: {
      lat: 48.8534,
      lon: 2.3488,
    },
    country: 'FR',
    population: 2138551,
    timezone: 7200,
    sunrise: 1661749381,
    sunset: 1661798438,
  },
}
