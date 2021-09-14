/**
 * A dummy parent class for test
 * @ko 테스트용 더미 부모 클래스
 */
class ParentClass {
  /**
   * Version info string
   * @ko 버전정보 문자열
   * @type {string}
   * @readonly
   * @example
   * ```ts
   * ParentClass.VERSION;  // ex) 4.0.0
   * ```
   */
  public static VERSION = "#__VERSION__#";

  /**
   * A property to inherit
   * @ko 상속할 프로퍼티
   * @type {number}
   */
  public inheritedProperty: number = 10;

  /**
   * Method A of ParentClass
   * @ko ParentClass의 메소드 A
   * @returns {number} A number<ko>숫자</ko>
   */
  public parentMethodA(): number {
    return 1;
  }
}

export default ParentClass;
