import { StoreModule } from '@ngrx/store';
import { AppReducer, IAppState } from './app.reducer';

export const StoreState = StoreModule.forRoot({
  app: AppReducer
});

export interface IStoreState {
  app: IAppState;
}
