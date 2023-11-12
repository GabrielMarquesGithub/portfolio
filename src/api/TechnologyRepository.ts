import data from "../data/technologies.json";

import { ITechnologyModel } from "../interfaces/models/ITechnologyModel";
import { ITechnologyRepository } from "../interfaces/repositories/ITechnologyRepository";

class TechnologyRepository implements ITechnologyRepository {
  getAll(): ITechnologyModel[] {
    return data.technologies;
  }
  getById(id: number): ITechnologyModel | null {
    return data.technologies.find((technology) => technology.id === id) ?? null;
  }
  getByIds(ids: number[]): ITechnologyModel[] {
    const result: ITechnologyModel[] = [];

    for (const id of ids) {
      const technology = this.getById(id);
      if (technology !== null) {
        result.push(technology);
      }
    }

    return result;
  }
}

export { TechnologyRepository };
