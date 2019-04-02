import { Injectable } from '@angular/core';
import { EarthQuake } from '../earthQuake';
@Injectable()
export class DataService {
    private data;

    setData(eartQuak: EarthQuake) {
        this.data = eartQuak;
    }
    getData() {
        return this.data;
    }
}