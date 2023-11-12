import { IGridLayoutContainerProps } from "./types";
import * as S from "./styles";

function GridLayoutContainer({ is, ...rest }: IGridLayoutContainerProps) {
  return <S.Container as={is} {...rest} />;
}

export { GridLayoutContainer };
