import { hello } from './main.js'

describe('main', () => {
  it('hello', () => {
    expect(hello()).toBe('Hello, TypeScript template.')
  })
})
