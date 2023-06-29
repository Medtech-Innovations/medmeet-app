import { Component } from '@angular/core';
import { CountryNameService } from '../../services/countries.service';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css']
})
export class CountrySelectorComponent {
  countries: string[] = [];
  selectedCountry?: string;

  constructor(private countryService: CountryNameService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe(countries => {
      this.countries = countries.sort();
    });
  }
  onCountrySelected(country: string) {
    this.selectedCountry = country;
  }
}
