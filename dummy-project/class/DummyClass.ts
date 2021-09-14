import DummyInterface from "../interface/DummyInterface";
import ParentClass from "./ParentClass";

/**
 * Description of DummyClass
 * @ko 더미 클래스
 * @extends ParentClass
 */
class DummyClass extends ParentClass implements DummyInterface {
  /**
   * Static class property A
   * @ko 정적 클래스 프로퍼티 A
   * @type {number}
   * @readonly
   * @example
   * ```ts
   * DummyClass.staticPropA;
   * ```
   */
  public static staticPropA: number = 1000;

  /**
   * Class Property A
   * @ko 클래스 프로퍼티 A
   * @type {string}
   * @readonly
   * @example
   * ```ts
   * new DummyClass("b").propA === "b";
   * ```
   */
  public readonly propA: string;

  /**
   * This will not displayed on the API page, as "@internal" is applied
   * @ko "@internal"이 적용되어 API 페이지에 표시되지 않을 프로퍼티
   * @internal
   */
  public get propB() { return { prop: { a: 1, b: "b" } } }

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
