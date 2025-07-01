import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontsComponent } from './fonts.component';
import { RouterModule } from '@angular/router';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { FooterComponent } from './footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { PreviewModalComponent } from './preview-modal/preview-modal.component';
import { FontsService } from './fonts.service';


@NgModule({
  declarations: [FontsComponent, FooterComponent, HeroSectionComponent, PreviewModalComponent],
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
  ],
  providers: [FontsService]
})
export class FontsModule { }
