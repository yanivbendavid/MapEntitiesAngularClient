import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { MapViewComponent } from './map-view/map-view.component';
import { MapEntityComponent } from './map-entity/map-entity.component';
import { ButtonComponent } from './button/button.component';
import { MapEntitiesComponent } from './map-entities/map-entities.component';

@NgModule({
  declarations: [AppComponent, MapViewComponent, MapEntityComponent, ButtonComponent, MapEntitiesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
