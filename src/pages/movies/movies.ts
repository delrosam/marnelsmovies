import { Component } from '@angular/core';
import { PeopleServiceProvider } from '../../providers/people-service/people-service';


@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
  providers: [PeopleServiceProvider],
})
export class MoviesPage {
  public people: any;
  
    constructor(public peopleService: PeopleServiceProvider){
      this.loadPeople();
    }
  
    loadPeople(){
      this.peopleService.load()
      .then(data => {
        this.people = data;
      });
    }

}
