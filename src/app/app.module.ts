import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ButtonPage } from '../pages/button/button';
import { MenuTestPage } from '../pages/menu-test/menu-test';
import { GeneratedTestePage } from '../pages/generated-teste/generated-teste';
import { AlertsPage } from '../pages/alerts/alerts';
import { ConnectionService } from '../providers/connection-service';
import { Lowercas } from '../pipes/lowercas';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    MenuTestPage,
    GeneratedTestePage,
    Lowercas,
    AlertsPage,
    ButtonPage
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    MenuTestPage,
    GeneratedTestePage,
    AlertsPage,
    ButtonPage
  ],
  providers: [ConnectionService]
})
export class AppModule {}
