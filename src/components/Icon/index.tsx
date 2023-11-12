import { IIconProps } from "./types";
import * as S from "./styles";

function Icon({ icon, ...rest }: IIconProps) {
  return <S.Container {...rest}>{icon}</S.Container>;
}

export { Icon };
