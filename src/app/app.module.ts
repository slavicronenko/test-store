import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { environment } from 'environments/environment';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { DevModuleModule } from './+dev-module';

import '../styles/styles.scss';
import { IStoreState, StoreState } from './app.store';
import { AppEffects } from './app.effects';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { StoreAppConfig } from './app.actions';
import { PagesModule } from './pages/pages.module';
import { CoreModule } from './core/core.module';

// Application wide providers
const APP_PROVIDERS = [];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
    StoreState,
    EffectsModule.forRoot([AppEffects]),
    CoreModule,
    PagesModule,
    /**
     * This section will import the `DevModuleModule` only in certain build types.
     * When the module is not imported it will get tree shaked.
     * This is a simple example, a big app should probably implement some logic
     */
    ...environment.showDevModule ? [ DevModuleModule ] : [],
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    environment.ENV_PROVIDERS,
    APP_PROVIDERS,
    AppService,
    {
      provide: APP_INITIALIZER,
      useFactory: (store: Store<IStoreState>, appService: AppService) => () => appService.fetchAppConfig()
        .pipe(tap((config) => store.dispatch(new StoreAppConfig(config))))
        .toPromise(),
      deps: [Store, AppService],
      multi: true
    }
  ]
})
export class AppModule {}
