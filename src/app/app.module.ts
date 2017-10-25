import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { EditMoviePage } from '../pages/edit-movie/edit-movie';
import { MoviePage } from '../pages/movie/movie';
import { MoviesPage } from '../pages/movies/movies';
import { MovieListPage } from '../pages/movie-list/movie-list';
import { TabsPage } from '../pages/tabs/tabs';
import { MovieListService } from '../services/movie-list';
import { BuyListService } from '../services/buy-list';
import { PeopleServiceProvider } from '../providers/people-service/people-service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    EditMoviePage,
    MoviePage,
    MoviesPage,
    MovieListPage,
    TabsPage
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EditMoviePage,
    MoviePage,
    MoviesPage,
    MovieListPage,
    TabsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieListService,
    BuyListService,
    PeopleServiceProvider
  ]
})
export class AppModule {}
