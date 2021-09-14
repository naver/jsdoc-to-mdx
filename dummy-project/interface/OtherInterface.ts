import DummyClass from "../class/DummyClass";

/**
 * Description of OtherInterface
 * @ko OtherInterface의 설명
 * @interface
 * @property {Array<DummyClass>} propA Desc of propA<ko>propA의 설명</ko>
 */
interface OtherInterface {
  propA: DummyClass[];
  propB: { a: number; b: string };
}

export default OtherInterface;
