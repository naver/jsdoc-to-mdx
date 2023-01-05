/**
 * Interface to use doc directly on property
 * @ko property에 직접 jsdoc 사용 인터페이스
 * @property {number} [numberProperty=0] - interface number property <ko>인터페이스 숫자 속성</ko>
 * @property {string} [stringProperty="text"] - interface string property <ko>인터페이스 문자열 속성</ko>
 * @typedef
 */
interface DefaultInterfaceTypedef {
  numberProperty: number;
  stringProperty: string;
}

export default DefaultInterfaceTypedef;
