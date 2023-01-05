/**
 * Interface to use doc directly on property
 * @ko property에 직접 jsdoc 사용 인터페이스
 * @typedef
 */
interface InlinePropertyInterfaceTypedef {
  /**
   * number property
   * <ko>숫자 속성</ko>
   * @default 0
   */
  numberProperty: number;
  /**
   * string property
   * <ko>문자열 속성</ko>
   * @default "text"
   */
  stringProperty: number;
}

export default InlinePropertyInterfaceTypedef;
