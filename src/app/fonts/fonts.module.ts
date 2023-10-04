import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontsComponent } from './fonts.component';
import { RouterModule } from '@angular/router';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [FontsComponent],
  imports: [
    CommonModule,
    DataViewModule,
    DialogModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    RouterModule.forChild([
      {
        path: "",
        component: FontsComponent
      }
    ])
  ]
})
export class FontsModule { }
