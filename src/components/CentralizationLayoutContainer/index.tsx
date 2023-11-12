import { ICentralizationLayoutContainerProps } from "./types";
import * as S from "./styles";

function CentralizationLayoutContainer({
  is,
  ...rest
}: ICentralizationLayoutContainerProps) {
  return <S.Container as={is} {...rest} />;
}

export { CentralizationLayoutContainer };
