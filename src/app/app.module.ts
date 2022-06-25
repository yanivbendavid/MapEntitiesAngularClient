import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

//import { mapEntities } from './mock-mapEntities';
import { MapViewComponent } from './map-view/map-view.component';
import { MapEntityComponent } from './map-entity/map-entity.component';
import { ButtonComponent } from './button/button.component';
import { MapEntitiesComponent } from './map-entities/map-entities.component';
import { MapEntityItemComponent } from './map-entity-item/map-entity-item.component';
import { RouterModule, Routes } from '@angular/router';
import { MissionMapComponent } from './mission-map/mission-map.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';

const appRoutes: Routes = [
  { path: '', component: MapEntityComponent },
  { path: 'repository', component: MapEntitiesComponent },
  { path: 'missionmap', component: MissionMapComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    MapEntityComponent,
    ButtonComponent,
    MapEntitiesComponent,
    MapEntityItemComponent,
    MissionMapComponent,
    MenuItemComponent,
    MenuItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
