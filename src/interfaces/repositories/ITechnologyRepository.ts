import { ITechnologyModel } from "../models/ITechnologyModel";

export type ITechnologyRepository = {
  getAll(): ITechnologyModel[];
  getById(id: number): ITechnologyModel | null;
  getByIds(ids: number[]): ITechnologyModel[];
};
