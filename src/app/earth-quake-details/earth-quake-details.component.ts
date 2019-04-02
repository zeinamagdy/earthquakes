import { Component, OnInit } from '@angular/core';
import { EarthQuake } from '../earthQuake';
import { DataService } from '../services/dataService';
@Component({
  selector: 'app-earth-quake-details',
  templateUrl: './earth-quake-details.component.html',
  styleUrls: ['./earth-quake-details.component.css']
})
export class EarthQuakeDetailsComponent implements OnInit {
  earthQuake: EarthQuake;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getEarthQuake();
  }

  getEarthQuake() {
    this.earthQuake = this.dataService.getData();
  }
}