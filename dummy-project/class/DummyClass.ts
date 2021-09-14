import ParentClass from "./ParentClass";

/**
 * Description of DummyClass
 * @ko 더미 클래스
 * @extends ParentClass
 */
class DummyClass extends ParentClass {
  /**
   * Class Property a
   * @ko 클래스 프로퍼티 a
   * @type {string}
   * @readonly
   * @example
   * ```ts
   * new DummyClass("b").propA === "b"
   * ```
   */
  public readonly propA: string

  /**
   * A constructor of DummyClass
   * @ko 더미 클래스의 생성자
   * @param {string} paramA Param A<ko>패러미터 A</ko>
   */
  public constructor(paramA: string) {
    super();

    this.propA = paramA;
  }

  /**
   * Method A
   * @param {number} a description of param a<ko>패러미터 A의 설명</ko>
   * @param {string} [b="DUMMY_TEXT"] description of param b<ko>패러미터 B의 설명</ko>
   */
  public methodA(a: number, b: string = "DUMMY_TEXT") {

  }
}

export default DummyClass;
