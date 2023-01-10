import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {ImageModule} from 'primeng/image';
import { TableModule} from 'primeng/table';
import {SplitButtonModule} from 'primeng/splitbutton';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [],
  imports: [
    TableModule,
    ImageModule,
    ButtonModule,
    MenubarModule,
    SplitButtonModule,
    InputTextModule ,
    ToastModule
  ],
  exports: [
    TableModule,
    ImageModule,
    ButtonModule,
    MenubarModule,
    SplitButtonModule,
    InputTextModule,
    ToastModule
  ]
})
export class PrimeModule { }
