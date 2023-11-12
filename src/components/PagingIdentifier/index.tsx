import { IPagingIdentifierProps } from "./types";
import * as S from "./styles";

function PagingIdentifier({
  currentPage,
  pagesQuantity,
}: IPagingIdentifierProps) {
  const indicatorArray = Array.from(
    { length: pagesQuantity },
    (_, index) => index + 1
  );
  return (
    <S.Container>
      {indicatorArray.map((indicator) => (
        <S.Indicator $active={indicator === currentPage} key={indicator}>
          <span />
        </S.Indicator>
      ))}
    </S.Container>
  );
}

export { PagingIdentifier };
