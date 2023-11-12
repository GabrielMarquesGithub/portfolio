import { ILinkWithLineProps } from "./types";
import * as S from "./styles";

import { Text } from "../Text";
import { Icon } from "../Icon";

function LinkWithLine({ icon, IconAriaLabel, ...rest }: ILinkWithLineProps) {
  return (
    <S.Container {...rest}>
      <Text is="span" $weight="bold">
        {rest.children}
      </Text>
      {!!icon && !!IconAriaLabel && (
        <Icon $size="small" icon={icon} aria-label={IconAriaLabel} />
      )}
    </S.Container>
  );
}

export { LinkWithLine };
