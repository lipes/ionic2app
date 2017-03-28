import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConnectionService } from '../../providers/connection-service';

@Component({
  selector: 'page-generated-teste',
  templateUrl: 'generated-teste.html'
})
export class GeneratedTestePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private connectionService : ConnectionService) {

  }

  buscarCep() : void{
  	this.connectionService.getCep().then((data)=>{
  		let dados = data.json();
  		console.log(dados);
  	});
  }
}
