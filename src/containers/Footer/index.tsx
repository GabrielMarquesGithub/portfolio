import * as S from "./styles";

import { CentralizationLayoutContainer } from "../../components/CentralizationLayoutContainer";
import { Text } from "../../components/Text";

function Footer() {
  return (
    <S.Footer>
      <CentralizationLayoutContainer $fullWidth $fullHeight>
        <Text is="p" $size="small" $color="dark">
          &copy; 2023 - Gabriel Marques Magalhães
        </Text>
      </CentralizationLayoutContainer>
    </S.Footer>
  );
}

export { Footer };
