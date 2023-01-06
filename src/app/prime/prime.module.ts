import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {ImageModule} from 'primeng/image';
import { TableModule} from 'primeng/table';
import {SplitButtonModule} from 'primeng/splitbutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import { NgTemplateOutlet } from '@angular/common';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ImageModule,
    ButtonModule,
    MenubarModule,
    SplitButtonModule,
    InputTextModule ,
    BrowserAnimationsModule,
    NgTemplateOutlet,
    ToastModule
  ],
  exports: [
    CommonModule,
    TableModule,
    ImageModule,
    ButtonModule,
    MenubarModule,
    SplitButtonModule,
    InputTextModule,
    BrowserAnimationsModule,
    NgTemplateOutlet,
    ToastModule
  ]
})
export class PrimeModule { }
