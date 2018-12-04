import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  users: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getPost();
  }

  getPost() {
    var id = 3;
    this.restProvider.getPost(id)
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
