const math = require('./math.js')

test('it runs the test', () => {
  // comparing actual to expected
  expect(true).toBe(true) // assertion
})

it('it compares objects', () => {
  // Arrange
  const expected = { name: 'Chris' }
  // Act: run the production code
  const actual = getName('Chris')
  // Assert - comparing actual to expected
  expect(actual).toEqual(expected)
  expect(getName()).toEqual({})
  expect(getName({})).toEqual({ name: {} })
})

it('adds two numbers', () => {
  expect(math.add(2, 2)).toBe(4)
  expect(math.add(-2, 2)).toBe(0)
})

function getName(name) {
  return { name }
}

// toBe compares references!
// TDD: Test Driven Development
// TDD: Test Driven Design