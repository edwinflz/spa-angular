import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutsComponent } from './layouts/layouts.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        redirectTo: '/tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks',
        loadChildren: () => import('./task/task.module').then(m => m.TaskModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('./contact/shedule.module').then(m => m.SheduleModule)
      }
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./errors/errors.module').then(m => m.ErrorsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
