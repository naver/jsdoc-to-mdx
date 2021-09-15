/**
 * Some global function
 * @ko Global function
 * @param {number} [a=10] Param A<ko>패러미터 A</ko>
 * @param {object} [b] Param B<ko>패러미터 B</ko>
 * @param {number} [b.foo=123] Foo<ko>Foo</ko>
 * @param {number} [b.bar=456] Bar<ko>Bar</ko>
 * @returns {string}
 */
function SomeGlobalFunction(a: number = 10, b = { foo: 123, bar: 456 }) {
  return "I'm global";
}

export default SomeGlobalFunction
