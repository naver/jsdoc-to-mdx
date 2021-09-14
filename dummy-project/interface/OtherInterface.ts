import DummyClass from "../class/DummyClass";

/**
 * Description of OtherInterface
 * @ko OtherInterface의 설명
 * @interface
 * @property {object} prop A property<ko>프로퍼티</ko>
 * @property {number} [prop.a] foo<ko>foo</ko>
 * @property {string} [prop.b] bar<ko>bar</ko>
 */
interface OtherInterface {
  prop: { a: number; b: string };
}

export default OtherInterface;
