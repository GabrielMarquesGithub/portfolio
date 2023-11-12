import { IImageModel } from "./IImageModel";
import { ITechnologyModel } from "./ITechnologyModel";

export type IProjectModel = {
  id: number;
  name: string;
  description: string;
  technologies: ITechnologyModel[];
  image: IImageModel;
  link: {
    repository?: string;
    deploy?: string;
  };
};
