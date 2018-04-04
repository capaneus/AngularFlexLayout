import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule, BreakPoint, BREAKPOINTS, CUSTOM_BREAKPOINTS_PROVIDER_FACTORY } from '@angular/flex-layout';

import { AppComponent } from './app.component';

const CUSTOM_BREAKPOINTS: BreakPoint[] = [{
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
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [CUSTOM_BREAKPOINTS_PROVIDER_FACTORY(CUSTOM_BREAKPOINTS, { defaults: true })],
  bootstrap: [AppComponent]
})
export class AppModule { }
