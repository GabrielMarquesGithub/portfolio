import { useState, useEffect } from "react";

import MenuIcon from "../../assets/icons/menu.svg?react";
import DownloadIcon from "../../assets/icons/download.svg?react";
import CloseIcon from "../../assets/icons/close.svg?react";

import * as S from "./styles";

import { Text } from "../../components/Text";
import { LinkWithLine } from "../../components/LinkWithLine";
import { Strong } from "../../components/Strong";
import { Icon } from "../../components/Icon";
import { Button } from "../../components/Button";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDivider, setShowDivider] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowDivider(true);
      } else {
        setShowDivider(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Header $hasDivider={showDivider}>
      <Text is="h1" $font="style" $size={["base", "big"]}>
        Gabriel{" "}
        <Strong is="b" $weight="normal" $highlighted>
          M
        </Strong>
        arques{" "}
        <Strong is="b" $weight="normal" $highlighted>
          M
        </Strong>
        agalhães
      </Text>
      <Button
        role="button"
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        $variant="transparent"
        $size="small"
        $shape="square"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Icon
          icon={isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          aria-label={isMenuOpen ? "Ícone de fechamento" : "Ícone de menu"}
        />
      </Button>
      <S.LinksSection $visible={isMenuOpen}>
        <LinkWithLine
          onClick={() => setIsMenuOpen(false)}
          aria-label="Início"
          href="#start"
        >
          Início
        </LinkWithLine>
        <LinkWithLine
          onClick={() => setIsMenuOpen(false)}
          aria-label="Projetos"
          href="#projects"
        >
          Projetos
        </LinkWithLine>
        <LinkWithLine
          aria-label="Baixar currículo"
          href="files\Gabriel Marques Magalhães - Currículo.pdf"
          download
          icon={<DownloadIcon />}
          IconAriaLabel="Ícone de download"
        >
          Currículo
        </LinkWithLine>
      </S.LinksSection>
    </S.Header>
  );
}

export { Header };
