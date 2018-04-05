import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { FlexLayoutModule, BreakPoint, BREAKPOINTS } from '@angular/flex-layout';

import { AppComponent } from './app.component';

const CUSTOM_BREAKPOINTS: BreakPoint[] = [{
  alias: 'lg',
  mediaQuery: '(min-width: 700px)',
}, {
  alias: 'sm',
  mediaQuery: '(max-width: 700px)',
}];

export function getCustomBreakpoints() {
  return CUSTOM_BREAKPOINTS;
}

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
    provide: BREAKPOINTS,
    useFactory: getCustomBreakpoints
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
