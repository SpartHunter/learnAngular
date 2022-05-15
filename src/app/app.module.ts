import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppSharedModule} from "./app-shared/app-shared.module";
import {AppElementsModule} from "./app-components/app-elements.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppSharedModule,
    AppElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
