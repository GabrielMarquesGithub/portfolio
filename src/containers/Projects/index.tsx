import { useState } from "react";

import ArrowIcon from "../../assets/icons/arrow.svg?react";

import { useMediaQueryArray } from "../../hooks/useMediaQueryArray";

import * as S from "./styles";

import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { Icon } from "../../components/Icon";
import { ProjectRepository } from "../../api/ProjectRepository";
import { PagingIdentifier } from "../../components/PagingIdentifier";

const projectRepository = new ProjectRepository();

function Projects() {
  const handleResize = () => {
    setPage(1);
  };
  const { getValueForScreenSize } = useMediaQueryArray({
    onResize: handleResize,
  });
  const [page, setPage] = useState(1);

  // Dados
  const projects = projectRepository.getAll();

  // Css
  const translate = (page - 1) * 100 * -1;

  // Ações
  const handlePageChange = (newPage: number) => {
    if (newPage < 1) return;
    setPage(newPage);
  };

  const pagesQuantity = Math.ceil(
    projects.length / getValueForScreenSize([2, 1, 2])
  );

  // Condicionais de exibição
  const hasPagination = projects.length > 2;
  const hasPerviousButton = page > 1;
  const hasNextButton = page < pagesQuantity;

  return (
    <S.CarouselContainer id="projects">
      <S.Header>
        <PagingIdentifier pagesQuantity={pagesQuantity} currentPage={page} />
      </S.Header>
      <S.Carousel $translate={translate} $itemsNumber={7}>
        {projects.map((project) => (
          <Card
            key={project.id}
            technologies={project.technologies}
            url={project.image.url}
            alt={project.image.alt}
            title={project.name}
            description={project.description}
            deployUrl={project.link?.deploy}
            repositoryUrl={project.link?.repository}
          />
        ))}
      </S.Carousel>
      {hasPagination && (
        <S.Footer>
          <Button
            aria-label="Pagina anterior"
            role="button"
            $shape="square"
            disabled={!hasPerviousButton}
            onClick={() => handlePageChange(page - 1)}
          >
            <Icon
              aria-label="Ícone de seta"
              $rotate={90}
              $color="dark"
              icon={<ArrowIcon />}
            />
          </Button>
          <Button
            aria-label="Proxima pagina"
            role="button"
            $shape="square"
            disabled={!hasNextButton}
            onClick={() => handlePageChange(page + 1)}
          >
            <Icon
              aria-label="Ícone de seta"
              $rotate={-90}
              $color="dark"
              icon={<ArrowIcon />}
            />
          </Button>
        </S.Footer>
      )}
    </S.CarouselContainer>
  );
}

export { Projects };
