import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  cities: City[] = [];
  dataLoaded = false;
  currentCity: City;

  constructor(
    private cityService: CityService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCities();
  }

  getCities() {
    this.cityService.getCities().subscribe((response) => {
      this.cities = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCity(currentCity: City) {
    this.currentCity = currentCity;
    console.log(currentCity);
  }

  getCurrentCity(currentCity: City) {
    if (currentCity == this.currentCity) {
      return 'list-group-item list-group-item-action list-group-item-active list-group-item-dark';
    } else {
      return 'list-group-item list-group-item-action lislist-group-item-dark';
    }
  }
}
