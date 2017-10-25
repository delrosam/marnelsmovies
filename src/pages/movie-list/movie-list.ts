import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController } from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { Buy } from '../../models/buy';
import { BuyListService } from '../../services/buy-list';


@Component({
  selector: 'page-movie-list',
  templateUrl: 'movie-list.html',
})
export class MovieListPage implements OnInit{

  buyItems: Buy[];
  buyOptions = ['DVD', 'Blu-ray', '4K Blu-ray'];
  buyForm: FormGroup;


    constructor(
      private buyService: BuyListService,
      private modalCtrl: ModalController,
      private navParams: NavParams,
      private navCtrl: NavController){
    }


    ionViewWillEnter(){
      this.loadItems();
    }



    private loadItems(){
      this.buyItems = this.buyService.getMovies();
    }


    ngOnInit(){
      this.initializeForm();
    }



    deleteMyBuyItem(buy: Buy){
      this.buyService.removeMovieFromList(buy);
      const position = this.buyItems.findIndex((movieEl: Buy) => {
        return movieEl.title == buy.title;
      });
      this.buyItems.splice(position, 1);
    }



    onSubmit(){
      console.log(this.buyForm);
      this.buyService.addMovie(this.buyForm.value.title, this.buyForm.value.type);
      this.buyForm.reset();
      this.loadItems();
    }



    private initializeForm(){
      this.buyForm = new FormGroup({
        'title': new FormControl(null, Validators.required),
        'type': new FormControl(null, Validators.required)
      });
    }




  

}
