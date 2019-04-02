import { Component, OnInit } from '@angular/core';
import { EarthQuakeService } from '../services/earth-quake.service';
import { EarthQuake } from '../earthQuake';
import { DataService } from '../services/dataService';
@Component({
  selector: 'app-earth-quake',
  templateUrl: './earth-quake.component.html',
  styleUrls: ['./earth-quake.component.css']
})
export class EarthQuakeComponent implements OnInit {
  earthQuakes: EarthQuake[];
  pageSize = 6;
  page = 1;
  earthQuakeCount: number;
  chartData: EarthQuake[];
  constructor(
    private service: EarthQuakeService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAllEarthQuack()
      .subscribe(response => {
        this.earthQuakes = response;
        this.earthQuakeCount = response.length;
      });
  }

  send(q: EarthQuake) {
    this.dataService.setData(q);
  }
}
