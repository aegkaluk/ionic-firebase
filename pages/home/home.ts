import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  itemValue = '';
  items: Observable<any[]>;

  constructor(public navCtrl: NavController,public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }




}
