import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-continente',
  templateUrl: 'continente.html',
})

export class ContinentePage {
  items: { 'continente': string; }[];

  continentes() {
    this.items = [
      {'continente' : 'Américas'},
      {'continente' : 'Asia'},
      {'continente' : 'Africa'},
      {'continente' : 'Europa'},
      {'continente' : 'Oceania'}
    ];
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.continentes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaisPage');
  }
}
