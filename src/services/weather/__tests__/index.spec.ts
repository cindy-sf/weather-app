import { waitFor } from '@testing-library/dom'

import { buildServicesUrl } from '@src/utils/buildServicesUrl'

import { fetchDailyWeather } from '..'

describe('fetchDailyWeather', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    })
  ) as jest.Mock

  it('should daily weather with the correct url', async () => {
    // GIVEN
    fetchDailyWeather()

    // THEN
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(buildServicesUrl('weather'))
    })
  })
})
