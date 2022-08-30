import { formatPrevisions } from '..'

import { formattedPrevisions, previsions } from '@src/__mocks__/previsions'

describe('formatPrevisions', () => {
  it.skip('should format the previsions well', () => {
    const result = formatPrevisions(previsions.list)
    expect(result).toStrictEqual(formattedPrevisions)
  })
})
