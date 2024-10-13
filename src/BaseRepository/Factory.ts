import authRepository from "./repositories/authRepository";

interface repositoriesTypeMap {
  auth: any;
}
export type repositoriesType = repositoriesTypeMap[keyof repositoriesTypeMap];
const repositories: repositoriesType = {
  auth: authRepository
};

export const RepoFactory: repositoriesType = {
  get: (name: string) => repositories[name],
};
