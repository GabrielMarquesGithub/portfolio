import { ILinkProps } from "./types";
import * as S from "./styles";

function Link({ ...rest }: ILinkProps) {
  return <S.Link {...rest} title={rest["aria-label"]} />;
}

export { Link };
