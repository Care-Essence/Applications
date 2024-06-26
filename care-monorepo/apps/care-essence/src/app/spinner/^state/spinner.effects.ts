import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import spinnerActions from './spinner.actions';
import { Store } from '@ngrx/store';
import spinnerSelectors from './spinner.selectors';
import { map } from 'rxjs/internal/operators/map';

@Injectable()
export class SpinnerEffects {
  constructor(private actions$: Actions, private readonly store: Store) {}

  showSpinner$ = createEffect(() =>
    this.actions$.pipe(
      ofType(spinnerActions.toggleSpinner),
      concatLatestFrom(() => [
        this.store.select(spinnerSelectors.getSpinnerState),
      ]),
      map(([action, showSpinner]) =>
        spinnerActions.showSpinner({ showSpinner: !showSpinner })
      )
    )
  );
}
