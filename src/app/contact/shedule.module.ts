import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SheduleRoutingModule } from './shedule-routing.module';
import { SharedModule } from '../shared/shared.module';


import { ListContactsComponent } from './containers/list-contacts/list-contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';


@NgModule({
  declarations: [ListContactsComponent, AddContactComponent],
  imports: [
    CommonModule,
    SheduleRoutingModule,
    SharedModule
  ]
})
export class SheduleModule { }
