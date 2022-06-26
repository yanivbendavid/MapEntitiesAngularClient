import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map-entity-item',
  templateUrl: './map-entity-item.component.html',
  styleUrls: ['./map-entity-item.component.css'],
})
export class MapEntityItemComponent implements OnInit {
  @Input() mapEntity!: string;
  @Output() onSelectMap: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onMapClick() {
    this.onSelectMap.emit(this.mapEntity);
  }
}
