import { Component, OnInit } from '@angular/core';
import { MapEntity } from '../MapEntity';
import { mapEntities } from '../mock-mapEntities';

@Component({
  selector: 'app-map-entities',
  templateUrl: './map-entities.component.html',
  styleUrls: ['./map-entities.component.css'],
})
export class MapEntitiesComponent implements OnInit {
  entities: MapEntity[] = mapEntities;

  constructor() {}

  ngOnInit(): void {}
}
