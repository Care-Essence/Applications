import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthFeatureKey, AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>(AuthFeatureKey);

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => !loggedIn);

export const getAuthRoute = createSelector(
  selectAuthState,
  (auth) => auth.descriptions
);

const authSelectors = {
  selectAuthState,
  isLoggedIn,
  isLoggedOut,
  getAuthRoute,
};

export default authSelectors;
