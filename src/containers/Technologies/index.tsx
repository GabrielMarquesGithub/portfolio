import { useRef, useState, useEffect } from "react";

import { TechnologyRepository } from "../../api/TechnologyRepository";

import { debounce } from "../../utils/debounce";

import * as S from "./styles";

import { Image } from "../../components/Image";

const technologyRepository = new TechnologyRepository();

function Technologies() {
  const [overflowWidth, setOverflowWidth] = useState(0);

  const technologiesContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const technologies = technologyRepository.getAll();

  // Função para lidar com ajuste na animação ao ajustar a tela
  const handleResize = () => {
    if (imageContainerRef.current && technologiesContainerRef.current) {
      const imageContainerRefWidth = imageContainerRef.current.scrollWidth;
      const technologiesContainerRefWidth =
        technologiesContainerRef.current.clientWidth;

      setOverflowWidth(imageContainerRefWidth - technologiesContainerRefWidth);
    }
  };

  // Evitando atualizações sucessivas de estado
  const debouncedResize = debounce(handleResize, 300);

  // Lidando com evento de "resize"
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imageContainerRef.current, technologiesContainerRef.current]);

  return (
    <S.Container ref={technologiesContainerRef}>
      <S.ImagesContainer
        $animationTime={overflowWidth / 7}
        $overflowWidth={overflowWidth}
        ref={imageContainerRef}
      >
        {technologies.map((technology) => (
          <S.ImageContainer key={technology.id} title={technology.name}>
            <Image
              $width="auto"
              $height="full"
              onLoad={debouncedResize}
              alt={technology.logo.alt}
              src={technology.logo.url}
            />
          </S.ImageContainer>
        ))}
      </S.ImagesContainer>
    </S.Container>
  );
}

export { Technologies };
