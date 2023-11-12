import data from "../data/projects.json";

import { TechnologyRepository } from "./TechnologyRepository";

import { IProjectModel } from "../interfaces/models/IProjectModel";
import { IProjectRepository } from "../interfaces/repositories/IProjectRepository";

const technologyRepository = new TechnologyRepository();

class ProjectRepository implements IProjectRepository {
  getAll(): IProjectModel[] {
    return data.projects.map((project) => ({
      ...project,
      technologies: technologyRepository.getByIds(project.technologies),
    }));
  }
}

export { ProjectRepository };
