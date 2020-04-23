import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleComponent } from './containers/schedule/schedule.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ListContactsComponent } from './containers/list-contacts/list-contacts.component';


const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
    children: [
      {
        path: '',
        redirectTo: '/contacts/list-contact',
        pathMatch: 'full',
      },
      {
        path: 'list-contact',
        component: ListContactsComponent
      },
      {
        path: 'add-contact',
        component: AddContactComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SheduleRoutingModule { }
