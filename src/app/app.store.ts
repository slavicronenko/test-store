import { StoreModule } from '@ngrx/store';
import { AppReducer, IAppState } from './app.reducer';
import { CategoryReducer, ICategoryState } from './pages/category/category.reducer';

export const StoreState = StoreModule.forRoot({
  app: AppReducer,
  category: CategoryReducer
});

export interface IStoreState {
  app: IAppState;
  category: ICategoryState;
}
