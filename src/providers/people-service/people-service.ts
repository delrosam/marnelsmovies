import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PeopleServiceProvider {
  data: any;


  constructor(private http: Http){

  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
  
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      //https://randomuser.me/api/?results=10
      //https://api.themoviedb.org/3/search/movie?api_key=f8785f620fd6b030cbe5b2a1002bac1b&query=Jack+Reacher
      //https://www.alaskaair.com/api/v1/AirportsLite/GetAllAirportsLite
      ///discover/movie/remote?language=en&media_type=movie
      this.http.get('https://api.themoviedb.org/3/search/movie?api_key=f8785f620fd6b030cbe5b2a1002bac1b&query=Jack+Reacher')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data.results;
          console.log(this.data);
          resolve(this.data);
        });
    });
  }

//
}
