import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MapEntity } from '../MapEntity';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MapEntityService {
  private apiUrl: string = '/maps';

  constructor(private http: HttpClient) {}

  getMapEntities(): Observable<MapEntity> {
    return this.http.get<MapEntity>(this.apiUrl);
  }
}
