import { ITextProps } from "./types";
import * as S from "./styles";

function Text({ is, children, readHTML, ...rest }: ITextProps) {
  if (readHTML && typeof children === "string") {
    return (
      <S.Text
        as={is}
        {...rest}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  }

  return <S.Text as={is} {...rest} children={children} />;
}

export { Text };
