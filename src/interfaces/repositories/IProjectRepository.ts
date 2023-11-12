import { IProjectModel } from "../models/IProjectModel";

export type IProjectRepository = {
  getAll(): IProjectModel[];
};
