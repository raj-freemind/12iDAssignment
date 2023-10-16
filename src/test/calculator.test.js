const { add, divide } = require("../service/calculator");

describe('Adding Two Number', () => {
  test('Adding two positive Number', () => {
    const adding = add(4, 2)
    expect(adding).toBe(6)
    expect(adding).toBeGreaterThan(0)
  });

  test('Adding two Negative Number', () => {
    const adding = add(-4, -2)
    expect(adding).toBe(-6)
    expect(adding).toBeLessThan(0)
  })

  test('Adding One positive number and other Zero', () => {
    const adding = add(0, 2)// add(3,0)
    expect(adding).toBeGreaterThan(0)
  })

  test('Adding One Negative number and other Zero', () => {
    const adding = add(-3, 0)// add(3,0)
    expect(adding).toBeLessThan(0)
  })

  test("Adding one Positive number and one nagative", () => {
    const adding = add(4, -2)
    expect(adding).toBeLessThan(4)
    expect(adding).toBeGreaterThan(-2)
  })

  test('Adding two Positive floating point numbers', () => {
    const adding = add(1.3, 1.2)
    expect(adding).toBeCloseTo(2.5);
    expect(adding).toBeGreaterThan(0)
  });
})

describe("Dividing a Number", () => {
  it('Dividing P/N integer by P/N integer', () => {
    const dividing = divide(4, 2)
    expect(dividing).toBeGreaterThan(0)
  })
  it('Dividing a nagative number by positive number', () => {
    const dividing = divide(-3, 2)
    expect(dividing).toBeLessThan(0)
  })
  it('Dividing a positive number by nagative number', () => {
    const dividing = divide(3, -2)
    expect(dividing).toBeCloseTo(-1.5)
    expect(dividing).toBeLessThan(0)
  })

  it('Dividing Zero by some number', () => {
    const dividing = divide(0, 2)
    expect(dividing).toBe(0)
  })

  it('Dividing Some number by Zero', () => {
    const dividing = divide(2, 0)
    expect(dividing).toBe(Infinity)
  })

})