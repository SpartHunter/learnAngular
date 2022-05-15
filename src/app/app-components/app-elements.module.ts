import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePageComponent} from "./home-page/home-page.component";
import {MoviesListComponent} from "./movies-list/movies-list.component";
import {AppSharedModule} from "../app-shared/app-shared.module";
import {TextHighlightDirective} from "../app-directive/text-highlight.directive";



@NgModule({
  declarations: [
    HomePageComponent,
    MoviesListComponent,
    TextHighlightDirective,
  ],
  imports: [
    CommonModule,
    AppSharedModule
  ],
  exports:[
    HomePageComponent,
  ]
})
export class AppElementsModule { }
