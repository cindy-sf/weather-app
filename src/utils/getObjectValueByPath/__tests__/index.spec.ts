import { getObjectValueByPath } from '..'

describe('getObjectValueByPath', () => {
  it('should return the expected value', () => {
    const obj = {
      names: {
        girl: {
          elena: 'Elena',
        },
        body: {
          joe: 'Joe',
        },
      },
    }

    expect(getObjectValueByPath('names.girl.elena', obj)).toStrictEqual('Elena')
  })
})
