import { formatPrevisions } from '..'

import { formattedPrevisions, previsions } from '@src/__mocks__/previsions'

describe('formatPrevisions', () => {
  it.skip('should format the previsions well', () => {
    expect(formatPrevisions(previsions.list)).toStrictEqual(formattedPrevisions)
  })
})