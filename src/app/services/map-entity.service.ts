import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MapEntity } from '../MapEntity';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MapEntityService {
  private apiUrl: string = 'http://localhost:55555/maps';

  constructor(private http: HttpClient) {}

  getMapEntities(): Observable<MapEntity> {
    return this.http.get<MapEntity>(this.apiUrl);
  }
}
