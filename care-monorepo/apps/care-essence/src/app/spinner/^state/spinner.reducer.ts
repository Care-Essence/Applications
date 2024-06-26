import { SharedUiState } from './spinner.models';
import { createReducer, on } from '@ngrx/store';
import spinnerActions from './spinner.actions';

export const spinnerFeatureKey = 'spinner';

export const initialSharedUiState: SharedUiState = {
  showSpinner: true,
};

export const spinnerReducer = createReducer(
  initialSharedUiState,
  on(spinnerActions.showSpinner, (state, action) => ({
    ...state,
    showSpinner: action.showSpinner,
  }))
);
