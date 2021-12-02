import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { DemoLifecycleComponent } from './demo-lifecycle.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DemoLifecycleComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DemoLifecycleComponent
  ]
})
export class DemoLifecycleModule { }
