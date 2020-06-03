import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'murli',
        loadChildren: () => import('../pages/murli/murli.module').then(m => m.MurliPageModule)
      },
      {
        path: 'commentary',
        loadChildren: () => import('../pages/commentary/commentary.module').then(m => m.CommentaryPageModule)
      },
      {
        path: 'classes',
        loadChildren: () => import('../pages/classes/classes.module').then(m => m.ClassesPageModule)
      },
      {
        path: 'course',
        loadChildren: () => import('../pages/course/course.module').then(m => m.CoursePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
