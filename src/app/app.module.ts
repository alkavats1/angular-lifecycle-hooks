import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './components/core/core.module';
import { DemoLifecycleModule } from './components/demo-lifecycle/demo-lifecycle.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    DemoLifecycleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
