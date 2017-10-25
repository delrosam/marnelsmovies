import { Component } from '@angular/core';
import { NavParams, ViewController, NavController } from 'ionic-angular';
import { EditMoviePage } from '../edit-movie/edit-movie';


@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {
  title: string;
	description: string;
	image: string;
	category: string;
	index: number;

	constructor(
		private viewCtrl: ViewController, 
		private navParams: NavParams,
		private navCtrl: NavController) {
  }

  ionViewDidLoad(){
		this.index = this.navParams.get('index');
		this.title = this.navParams.get('title');
    this.description = this.navParams.get('description');
		this.image = this.navParams.get('image');
		this.category = this.navParams.get('category');
	}

	editThisMovie(){
    this.navCtrl.push(EditMoviePage, {mode: 'Edit', title: this.title, description: this.description, image: this.image, category: this.category});
  }

	onClose(remove = false){
		this.viewCtrl.dismiss(remove);
	}

}
