import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './example-simple/tab/tab.component';
import { TabComplexComponent } from './example-complex/tab-complex/tab-complex.component';
import { TabsComponent } from './example-simple/tabs/tabs.component';
import { TabLabelComplexComponent } from './example-complex/tab-label-complex/tab-label-complex.component';
import { TabBodyComplexComponent } from './example-complex/tab-body-complex/tab-body-complex.component';
import { TabItemComplexComponent } from './example-complex/tab-item-complex/tab-item-complex.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabComponent,
    TabComplexComponent,
    TabLabelComplexComponent,
    TabBodyComplexComponent,
    TabItemComplexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
