import { HierarchyType } from '../types/HierarchyType';
const arg = 'elements';
export const hierarchyQueryBuilder = (query: HierarchyType[]) =>
    `${arg}=${query.join(`&${arg}=`)}`;
