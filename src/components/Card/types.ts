import { ITechnologyModel } from "../../interfaces/models/ITechnologyModel";

export type IContentContainerStyleProps = {
  open: boolean;
};

export type ICardProps = {
  title: string;
  description: string;
  url: string;
  alt: string;
  technologies?: ITechnologyModel[];
  repositoryUrl?: string;
  deployUrl?: string;
};
