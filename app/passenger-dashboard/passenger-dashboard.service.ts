import { Http, Response } from "@angular/http";
import { Passenger } from "./models/passenger.interface";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

const PASSENGER_API:string = "/api/passengers"
@Injectable()
export class PassengerDashboardService{
  constructor(private http: Http) {}

  getPassenger(): Observable<Passenger[]> {
    return this.http
      .get(PASSENGER_API)
      .map((response: Response) => response.json())
  }
}