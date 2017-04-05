import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { CategoriesData } from '../../providers/categories-data';

@Component({
  selector: 'page-session-detail',
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
  session: any;
  items: any = [];

  constructor(public navParams: NavParams, public categories: CategoriesData) {
    this.session = navParams.data;
    this.categories.getCategoriesDetail(this.session.id_categories).then((data) => {
      this.items = data.json();
    });
  }
}
