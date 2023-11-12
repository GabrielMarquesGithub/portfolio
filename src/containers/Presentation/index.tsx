import { useRef, useEffect } from "react";
import { useTheme } from "styled-components";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import GIcon from "../../assets/icons/letters/G.svg?react";
import M1Icon from "../../assets/icons/letters/M1.svg?react";
import M2Icon from "../../assets/icons/letters/M2.svg?react";

import * as S from "./styles";

import { Text } from "../../components/Text";
import { GridLayoutContainer } from "../../components/GridLayoutContainer";
import { Icon } from "../../components/Icon";
import { Strong } from "../../components/Strong";

function Presentation() {
  // Empregando condicionais baseadas no tamanho de tela
  const { breakpoint } = useTheme();
  const isMobileScreen = useMediaQuery(breakpoint.md);

  // Obtendo o container de letras
  const letterContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobileScreen) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (letterContainerRef.current) {
        // Iterando sobre os nodes do letterContainerRef
        letterContainerRef.current.childNodes.forEach((element, index) => {
          const x = e.clientX;
          const y = e.clientY;
          const speed = 0.5 * (index + 1);

          // Aplicando translate ao mover o mouse
          (element as HTMLSpanElement).style.transform = `translate(${
            (speed * x) / 100
          }px, ${(speed * y) / 100}px)`;
        });
      }
    };

    // Adicionando listener ao document na montagem do componente
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Removendo listener do document na desmontagem do componente
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobileScreen]);

  return (
    <GridLayoutContainer
      id="start"
      is="section"
      $columns={[1, 1, 2]}
      $gap="big"
    >
      <S.PresentationCentralizationLayoutContainer $fullWidth $fullHeight>
        <S.LettersContainer ref={letterContainerRef}>
          <Icon aria-label="Ícone da letra G 3d" $size={400} icon={<GIcon />} />
          <Icon
            aria-label="Ícone da letra M 3d"
            $size={400}
            icon={<M1Icon />}
          />
          <Icon
            aria-label="Ícone da letra M 3d"
            $size={400}
            icon={<M2Icon />}
          />
        </S.LettersContainer>
      </S.PresentationCentralizationLayoutContainer>
      <S.PresentationCentralizationLayoutContainer $fullWidth $fullHeight>
        <S.TextContainer>
          <Text
            is="h2"
            $font="style"
            $size="huge"
            $align={["center", "center", "left"]}
          >
            Um pouco sobre mim
          </Text>
          <Text is="p" $align={["center", "center", "left"]}>
            Hey, eu sou o <Strong is="strong">Gabriel</Strong> atuo como
            desenvolvedor full stack apaixonado por criar interfaces atraentes e
            sistemas robustos. Meu foco principal é na construção de interfaces
            interativas, intuitivas e responsivas, mas também tenho experiência
            sólida no desenvolvimento de servidores e APIs no server-side.
            Bem-vindo ao meu <Strong is="strong">portfólio</Strong>, onde você
            pode conferir um pouco do que sou como desenvolvedor.
          </Text>
        </S.TextContainer>
      </S.PresentationCentralizationLayoutContainer>
    </GridLayoutContainer>
  );
}

export { Presentation };
