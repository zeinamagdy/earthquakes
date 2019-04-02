export class EarthQuake {
  constructor(
    public id: string,
    public title: string,
    public place: string,
    public mag: number,
    public url: string,
    public lat: number,
    public lng: number,
    public detail: string,
    public status: string,
    public time: Date
  ) { }
}
