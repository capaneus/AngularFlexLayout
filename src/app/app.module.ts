import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { FlexLayoutModule, BreakPoint, BREAKPOINT, DISABLE_DEFAULT_BREAKPOINTS } from '@angular/flex-layout';

import { AppComponent } from './app.component';

export const CUSTOM_BREAKPOINTS: BreakPoint[] = [{
  alias: 'lg',
  mediaQuery: '(min-width: 700px)',
}, {
  alias: 'sm',
  mediaQuery: '(max-width: 700px)',
}];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'flex-server-side' }),
    BrowserTransferStateModule,
    FlexLayoutModule
  ],
  providers: [{
    provide: BREAKPOINT,
    useValue: CUSTOM_BREAKPOINTS
  }, {
    provide: DISABLE_DEFAULT_BREAKPOINTS,
    useValue: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
