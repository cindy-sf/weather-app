import { formatPrevisions } from '..'

import { formattedPrevisions, previsions } from '@src/__mocks__/previsions'

describe('formatPrevisions', () => {
  it('should format the previsions properly', () => {
    expect(formatPrevisions(previsions.list)).toStrictEqual(formattedPrevisions)
  })
})
