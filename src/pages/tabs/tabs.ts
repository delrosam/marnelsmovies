import { Component } from '@angular/core';
import { MovieListPage } from '../movie-list/movie-list';
import { MoviesPage } from '../movies/movies';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
    mlPage = MovieListPage;
    moviesPage = MoviesPage;
 
}
