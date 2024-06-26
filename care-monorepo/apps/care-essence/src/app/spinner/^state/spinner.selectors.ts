import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedUiState } from './spinner.models';
import { spinnerFeatureKey } from './spinner.reducer';

export const selectSharedUiState =
  createFeatureSelector<SharedUiState>(spinnerFeatureKey);

export const getSpinnerState = createSelector(
  selectSharedUiState,
  (spinner) => spinner.showSpinner
);

export const spinnerSelectors = {
  getSpinnerState,
};

export default spinnerSelectors;
