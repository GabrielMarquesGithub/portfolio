import { IInputProps } from "./types";
import * as S from "./styles";

function Input({ ...rest }: IInputProps) {
  return (
    <S.Input
      aria-invalid={rest.$error}
      placeholder="Procurando algo?"
      {...rest}
    />
  );
}

export { Input };
