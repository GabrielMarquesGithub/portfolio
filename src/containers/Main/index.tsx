import { IMainProps } from "./types";
import * as S from "./styles";

function Main({ children }: IMainProps) {
  return <S.Main>{children}</S.Main>;
}

export { Main };
