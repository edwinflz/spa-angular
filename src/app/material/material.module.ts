import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    DragDropModule
  ],
  exports: [
    MatSelectModule,
    DragDropModule
  ]
})
export class MaterialModule { }
