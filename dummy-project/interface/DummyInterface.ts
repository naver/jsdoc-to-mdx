import OtherInterface from "./OtherInterface";
import ParentInterface from "./ParentInterface";

/**
 * Description of DummyInterface
 * @ko DummyInterface의 설명
 * @interface
 * @property {string} propA Property A<ko>프로퍼티 A</ko>
 * @property {OtherInterface} propB Property B<ko>프로퍼티 B</ko>
 */
interface DummyInterface extends ParentInterface {
  propA: string;
  propB: OtherInterface;
}

export default DummyInterface;
