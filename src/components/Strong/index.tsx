import { IStrongProps } from "./types";
import * as S from "./styles";

function Strong({ is, ...rest }: IStrongProps) {
  return <S.Strong as={is} {...rest} />;
}

export { Strong };
