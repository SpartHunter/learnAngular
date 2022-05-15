import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterBarComponent} from './footer-bar/footer-bar.component'
import {HeaderBarComponent} from "./header-bar/header-bar.component";
import {HeaderMenuComponent} from "./header-bar/header-menu/header-menu.component";


@NgModule({
  declarations: [
    FooterBarComponent,
    HeaderBarComponent,
    HeaderMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterBarComponent,
    HeaderBarComponent
  ]
})
export class AppSharedModule { }
