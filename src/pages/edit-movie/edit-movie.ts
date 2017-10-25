import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieListService } from '../../services/movie-list';
import { MoviesPage } from '../movies/movies';
import { Ingredient } from '../../models/ingredients';


@Component({
  selector: 'page-edit-movie',
  templateUrl: 'edit-movie.html',
})
export class EditMoviePage implements OnInit{
    mode = 'New';
    selectOptions = ['Action', 'Adventure', 'Drama', 'Horror', 'Comedy', 'Television'];
    movieForm: FormGroup;
    myTitle: string;
    myDescription: string;
    myImage: string;
    myCategory: string;

    constructor(
      private navParams: NavParams, 
      private mlService: MovieListService,
      private navCtrl:NavController){

      }

    ngOnInit(){
      this.mode = this.navParams.get('mode');
     
      if(this.mode == 'Edit'){
        this.myTitle = this.navParams.get('title');
        this.myDescription = this.navParams.get('description');
        this.myImage = this.navParams.get('image');
        this.myCategory = this.navParams.get('category');
      }

      this.initializeForm();

    }


    onSubmit(){
      console.log(this.movieForm);
      if(this.mode == 'Edit'){
        
      }

      this.mlService.addMovie(this.movieForm.value.title, this.movieForm.value.description, this.movieForm.value.image, this.movieForm.value.category);
      this.movieForm.reset();
      this.navCtrl.popToRoot();
    }



    private initializeForm(){
      let title = null;
      let description = null;
      let image = null;
      let category = 'Action';

      if(this.mode == 'Edit'){
        title = this.myTitle;
        description = this.myDescription;
        image = this.myImage;
        category = this.myCategory;
      }

      this.movieForm = new FormGroup({
        'title': new FormControl(title, Validators.required),
        'description': new FormControl(description, Validators.required),
        'image': new FormControl(image, Validators.required),
        'category':new FormControl(category, Validators.required)
      });
    }

}
