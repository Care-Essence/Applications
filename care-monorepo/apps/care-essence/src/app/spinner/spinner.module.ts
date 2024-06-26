import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { spinnerFeatureKey, spinnerReducer } from './^state/spinner.reducer';
import { SpinnerEffects } from './^state/spinner.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(spinnerFeatureKey, spinnerReducer),
    EffectsModule.forFeature([SpinnerEffects]),
  ],
})
export class SpinnerModule {}
