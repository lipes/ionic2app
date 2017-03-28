import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ButtonPage } from '../button/button';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
	button: any = ButtonPage;
	constructor(public navCtrl: NavController) {
	}

	openPageButton(page) {
	    // Reset the content nav to have just this page
	    // we wouldn't want the back button to show in this scenario
	    this.navCtrl.push(ButtonPage);
	}
}
