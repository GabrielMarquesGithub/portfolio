import { IImageProps } from "./types";
import * as S from "./styles";

function Image({ ...rest }: IImageProps) {
  return <S.Image {...rest} />;
}

export { Image };
