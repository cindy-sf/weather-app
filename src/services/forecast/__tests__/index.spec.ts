import { waitFor } from '@testing-library/dom'

import { buildServicesUrl } from '@src/utils/buildServicesUrl'

import { fetchPrevisions } from '..'

describe('fetchPrevisions', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(),
    })
  ) as jest.Mock

  it('should collect previsions with the correct url', async () => {
    // GIVEN
    fetchPrevisions()

    // THEN
    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(buildServicesUrl('forecast'))
    })
  })
})
