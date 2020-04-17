import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [HeaderComponent, ScheduleComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    ScheduleComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
