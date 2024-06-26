import { createAction, props } from '@ngrx/store';

export const toggleSpinner = createAction('[SharedUi] Toggle Spinner');

export const showSpinner = createAction(
  '[SharedUi] Show Spinner',
  props<{ showSpinner: boolean }>()
);

const spinnerActions = {
  showSpinner,
  toggleSpinner,
};

export default spinnerActions;
