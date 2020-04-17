import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleComponent } from '../shared/schedule/schedule.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ListContactsComponent } from './containers/list-contacts/list-contacts.component';


const routes: Routes = [
  {
    path: '',
    component: ListContactsComponent
  },
  {
    path: 'add-contact',
    component: AddContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SheduleRoutingModule { }
