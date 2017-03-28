import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { MenuTestPage } from '../pages/menu-test/menu-test';
import { GeneratedTestePage } from '../pages/generated-teste/generated-teste';
import { AlertsPage } from '../pages/alerts/alerts';
import { ButtonPage } from '../pages/button/button';


@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;
  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform, public menuCtrl: MenuController) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Page One', component: Page1, icon: 'home'},
      {title: 'Page Two', component: Page2, icon: 'home'},
      {title: 'Menu Teste', component: MenuTestPage, icon: 'menu'},
      {title: 'Generated Page', component: GeneratedTestePage, icon: 'menu'},
      {title: 'Alerts Page', component: AlertsPage, icon: 'menu'},
      {title: 'Button Page', component: ButtonPage, icon: 'menu'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.rootPage = page.component;
  }
}
