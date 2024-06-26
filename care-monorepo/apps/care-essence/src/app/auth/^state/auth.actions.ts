import { createAction, props } from '@ngrx/store';
import { RouteDescriptions, User } from '@care-monorepo/models';

export const updateRouteDescriptions = createAction(
  '[Auth] Update Descriptions',
  props<{ descriptions: RouteDescriptions }>()
);

export const login = createAction(
  '[Login Page] User Login',
  props<{ user: User }>()
);

export const logout = createAction('[Top Menu] Logout');

const authActions = {
  updateRouteDescriptions,
  login,
  logout,
};

export default authActions;
