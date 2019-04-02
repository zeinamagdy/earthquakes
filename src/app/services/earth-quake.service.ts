import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EarthQuake } from '../earthQuake';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class EarthQuakeService {
  private url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
  constructor(private http: HttpClient) { }
  getAllEarthQuack(): Observable<EarthQuake[]> {
    return this.http.get(this.url).pipe(
      map((data: any) => data.features.map((item: any) => new EarthQuake(
        item.id,
        item.properties.title,
        item.properties.place,
        item.properties.mag,
        item.properties.url,
        item.geometry.coordinates[1],
        item.geometry.coordinates[0],
        item.properties.detail,
        item.properties.status,
        new Date(item.properties.time)
      ))),
    );

  }
}
