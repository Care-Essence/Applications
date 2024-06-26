import { AuthRoutes, RouteDescriptions, User } from '@care-monorepo/models';

export interface AuthEntity {
  descriptions?: RouteDescriptions;
  user?: User;
}
