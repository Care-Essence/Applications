import { AuthEntity } from './auth.models';
import { createReducer, on } from '@ngrx/store';
import authActions from './auth.actions';
import { AuthRoutes } from '@care-monorepo/models';

export const AuthFeatureKey = 'auth';

export type AuthState = AuthEntity;

export const initialAuthState: AuthState = {
  descriptions: {
    title: AuthRoutes.login,
    description: 'Ready to connect to open positions near you?',
  },
  user: undefined,
};

export const authReducer = createReducer(
  initialAuthState,
  on(authActions.updateRouteDescriptions, (state, action) => ({
    ...state,
    descriptions: action.descriptions,
  })),
  on(authActions.login, (state, action) => ({
    ...state,
    user: action.user,
  })),
  on(authActions.logout, (state) => ({
    ...state,
    user: undefined,
  }))
);
