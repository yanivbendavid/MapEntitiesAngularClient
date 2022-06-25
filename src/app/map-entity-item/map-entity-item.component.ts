import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-entity-item',
  templateUrl: './map-entity-item.component.html',
  styleUrls: ['./map-entity-item.component.css'],
})
export class MapEntityItemComponent implements OnInit {
  @Input() mapEntity!: string;

  constructor() {}

  ngOnInit(): void {}
}
