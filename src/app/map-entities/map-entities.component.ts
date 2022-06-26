import { Component, OnInit } from '@angular/core';
import { MapEntityService } from '../services/map-entity.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-map-entities',
  templateUrl: './map-entities.component.html',
  styleUrls: ['./map-entities.component.css'],
})
export class MapEntitiesComponent implements OnInit {
  maps: string[] = [];
  imagePath: SafeResourceUrl = '';
  imageIsVisible: boolean = false;

  constructor(
    private mapEntityService: MapEntityService,
    private _sanitizer: DomSanitizer
  ) {}

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

  selectMap(mapName: string) {
    this.mapEntityService.getMapBase64(mapName).subscribe((mapDto) => {
      this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl(
        'data:image/jpg;base64,' + mapDto.mapBase64
      );
      this.imageIsVisible = true;
    });
  }
}
