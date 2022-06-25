import { Component, OnInit } from '@angular/core';
import { MapEntityService } from '../services/map-entity.service';

@Component({
  selector: 'app-map-entities',
  templateUrl: './map-entities.component.html',
  styleUrls: ['./map-entities.component.css'],
})
export class MapEntitiesComponent implements OnInit {
  maps: string[] = [];

  constructor(private mapEntityService: MapEntityService) {}

  ngOnInit(): void {
    this.mapEntityService.getMapEntities().subscribe((ent) => {
      this.maps = ent.mapsNames;
      console.log(
        `${
          this.maps.length
        } map entities loaded at ${new Date().toLocaleTimeString()}`
      );
    });
  }
}
