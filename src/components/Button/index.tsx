import { IButtonProps } from "./types";
import * as S from "./styles";

function Button({ ...rest }: IButtonProps) {
  return <S.Button aria-disabled={rest.disabled} {...rest} />;
}

export { Button };
