import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorsRoutingModule } from './colors-routing.module';
import { ColorsComponent } from './colors.component';
import { ColComponent } from './col/col.component';

@NgModule({
  imports: [
    CommonModule,
    ColorsRoutingModule,
  ],
  declarations: [ColorsComponent, ColComponent]
})
export class ColorsModule { }
