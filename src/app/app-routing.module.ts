import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoLifecycleComponent } from './components/demo-lifecycle/demo-lifecycle.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/lifecycle-hooks'
  },
  {
    path: 'lifecycle-hooks',
    component: DemoLifecycleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
