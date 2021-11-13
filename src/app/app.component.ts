import { Component, OnInit } from '@angular/core';
import { PoMenuItem, PoPageAction, PoPageSlideComponent, PoTableColumn } from '@po-ui/ng-components';
import { model } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //#region Propriedades
  MenuService: PoPageSlideComponent;
  MenuRaca: PoPageSlideComponent;

  actionOptions: Array<PoPageAction> = [
    {
      label: "Serviço", action: this.ServicoOpen.bind(this)
    },
    {
      label: "Raças", action: this.RacaOpen.bind(this)
    },
  ]

  //#endregion Propriedades

  ngOnInit() {

  }

  constructor(){}

  //#region Metodos


  //#endregion Metodos

  //#region MenuServico
  ServicoOpen(){
    this.MenuService.open();
  }

  EventeMenu(Menu: PoPageSlideComponent){
    this.MenuService = Menu;
  }
  //#endregion MenuServico

  //#region MenuRaca
  RacaOpen(){
    this.MenuRaca.open();
  }

  EventeMenuRaca(Menu: PoPageSlideComponent){
    this.MenuRaca = Menu;
  }
  //#endregion MenuRaca

}
