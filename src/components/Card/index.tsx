import { ICardProps } from "./types";
import * as S from "./styles";

import GithubIcon from "../../assets/icons/github.svg?react";
import InternetIcon from "../../assets/icons/internet.svg?react";
import CloseIcon from "../../assets/icons/close.svg?react";

import { Text } from "../Text";
import { Image } from "../Image";
import { Button } from "../Button";
import { Link } from "../Link";
import { useState } from "react";
import { Icon } from "../Icon";

function Card({
  title,
  description,
  alt,
  url,
  technologies,
  deployUrl,
  repositoryUrl,
}: ICardProps) {
  const [isContentOpen, setIsContentOpen] = useState(false);

  return (
    <S.Container>
      <Image $height="auto" $width="full" src={url} alt={alt} />
      <S.ContentContainer open={isContentOpen}>
        <S.Title>
          <Text is="h3" $lineLimit={1} $weight="bold" $align="center">
            {title}
          </Text>
          <S.ActionContainer>
            {repositoryUrl && (
              <Link
                aria-label="Repositório"
                href={repositoryUrl}
                target="_blank"
              >
                <Button
                  $variant="transparent"
                  role="link"
                  aria-label="Repositório"
                  $size="small"
                  $shape="square"
                >
                  <Icon
                    icon={<GithubIcon />}
                    $size="small"
                    aria-label="Ícone do github"
                  />
                </Button>
              </Link>
            )}
            {deployUrl && (
              <Link aria-label="Deploy" href={deployUrl} target="_blank">
                <Button
                  $variant="transparent"
                  role="link"
                  aria-label="Deploy"
                  $size="small"
                  $shape="square"
                >
                  <Icon
                    icon={<InternetIcon />}
                    $size="small"
                    aria-label="Ícone da internet"
                  />
                </Button>
              </Link>
            )}
            <Button
              $variant="transparent"
              role="button"
              aria-label={
                isContentOpen
                  ? "Mostrar menos detalhes"
                  : "Mostrar mais detalhes"
              }
              $size="small"
              $shape="square"
              onClick={() => setIsContentOpen(!isContentOpen)}
            >
              <Icon
                icon={<CloseIcon />}
                $size="small"
                aria-label={
                  isContentOpen ? "Ícone de fechamento" : "Ícone de mais"
                }
              />
            </Button>
          </S.ActionContainer>
        </S.Title>
        <S.Content>
          <S.TextContainer>
            <Text is="p" $size="small" $align="justify">
              {description}
            </Text>
          </S.TextContainer>

          <S.ImagesContainer>
            {technologies &&
              technologies.length > 0 &&
              technologies.map((technology) => (
                <Image
                  $height="full"
                  $width="auto"
                  key={technology.id}
                  alt={technology.icon.alt}
                  title={technology.name}
                  src={technology.icon.url}
                />
              ))}
          </S.ImagesContainer>
        </S.Content>
      </S.ContentContainer>
    </S.Container>
  );
}

export { Card };
