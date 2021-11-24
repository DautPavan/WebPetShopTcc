import { grid } from './models/grid';
import { Filtros } from './models/Filtros';
import { Component, OnInit } from '@angular/core';
import { PoMenuItem, PoNotificationService, PoPageAction, PoPageFilter, PoPageSlideComponent, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { ServiceServicoService } from './Services/service-servico.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //#region Propriedades
  MenuService: PoPageSlideComponent;
  MenuRaca: PoPageSlideComponent;
  MenuFiltro: PoPageSlideComponent;

  filtros: Filtros = new Filtros();
  isTelaLoad: boolean = false;
  isGridLoad: boolean = false;

  grid: grid[];

  actions: Array<PoTableAction> = [
    { action: this.Iniciar.bind(this), icon: 'fas fa-play-circle', label: 'Iniciar' },
    { action: this.Finalizar.bind(this), icon: 'fas fa-check-circle', label: 'Finalizar' },
    { action: this.remove.bind(this), icon: 'po-icon po-icon-delete', label: 'Remove' }
  ];

  readonly columns: Array<PoTableColumn> = [
    { property: 'HoraAgendada', label: 'Data Agend.', width: 'auto', type: 'dateTime'},
    {
      property: 'Status',
      label: 'Atendimento',
      width: 'auto',
      type: 'label',
      labels: [
        { value: 0, color: 'color-07', label: 'Espera' },
        { value: 1, color: 'color-03', label: 'Iniciado' },
        { value: 2, color: 'color-10', label: 'Concluído' }
      ]
    },
    { property: 'NomeDono', label: 'Dono', width: 'auto' },
    { property: 'Email', label: 'Email Dono', width: 'auto', visible: false },
    { property: 'NomeAnimal', label: 'Pet', width: 'auto'},
    {
      property: 'GeneroBiologico',
      label: 'Gênero',
      width: 'auto',
      type: 'label',
      labels: [
        { value: 1, color: 'color-07', label: 'Fêmea' },
        { value: 2, color: 'color-02', label: 'Macho' },
      ]
    },
    {
      property: 'PorteAnimal',
      label: 'Porte Pet',
      width: 'auto',
      type: 'label',
      labels: [
        { value: 1, color: 'color-01', label: 'Pequeno' },
        { value: 2, color: 'color-08', label: 'Médio' },
        { value: 3, color: 'color-05', label: 'Grande' }
      ]
    },
    { property: 'NomeRaca', label: 'Raça', width: 'auto'},
    { property: 'NomeServico', label: 'Cód. Serv.', width: 'auto' },
    { property: 'Descricao', label: 'Serviço', width: 'auto'},
    { property: 'Valor', label: 'Valor', width: 'auto', type: 'currency' },
  ];
  actionOptions: Array<PoPageAction> = [
    {
      label: "Serviço", action: this.ServicoOpen.bind(this)
    },
    {
      label: "Raças", action: this.RacaOpen.bind(this)
    },
  ]

  public readonly filter: PoPageFilter = {
    advancedAction: this.FiltroOpen.bind(this),
  };

  //#endregion Propriedades

  ngOnInit() {

  }

  constructor(private _servico: ServiceServicoService, private _NotificationService: PoNotificationService) { }

  //#region Metodos
  carregarGrid(){
    var string = this.filtros.Data.split('-');
    var Data = new Date (parseInt(string[0]), (parseInt(string[1]) - 1), parseInt(string[2]));

    this.isGridLoad = true;
    this._servico.getMontarGrid(Data).subscribe(x => {
      this.grid = [...x];
      console.log(this.grid)
      this.isGridLoad = false;
    },
    error => {
      if (error.status >= 400 && error.status < 500){
        this.isGridLoad = false;
        this._NotificationService.warning(error.error.menssage);
        return;
      }
      this.isGridLoad = false;
      this._NotificationService.error(error.error.menssage);
    });

  }

  remove(linha: grid){
    this._servico.deleteAgenda(linha.Id).subscribe(x => {
      this._NotificationService.success("Horário deletado com sucesso.");
      this.isGridLoad = false;
      this.carregarGrid();
    },
    error => {
      if (error.status >= 400 && error.status < 500){
        this.isGridLoad = false;
        this._NotificationService.warning(error.error.menssage);
        return;
      }
      this.isGridLoad = false;
      this._NotificationService.error(error.error.menssage);
    });
  }

  Iniciar(linha: grid){
    this._servico.getIniciar(linha.Id).subscribe(x => {
      this._NotificationService.success("Horário iniciado.");
      this.isGridLoad = false;
      this.carregarGrid();
    },
    error => {
      if (error.status >= 400 && error.status < 500){
        this.isGridLoad = false;
        this._NotificationService.warning(error.error.menssage);
        return;
      }
      this.isGridLoad = false;
      this._NotificationService.error(error.error.menssage);
    });
  }

  Finalizar(linha: grid){
    this._servico.getFinalizar(linha.Id).subscribe(x => {
      this._NotificationService.success("Horário finalizado.");
      this.isGridLoad = false;
      this.carregarGrid();
    },
    error => {
      if (error.status >= 400 && error.status < 500){
        this.isGridLoad = false;
        this._NotificationService.warning(error.error.menssage);
        return;
      }
      this.isGridLoad = false;
      this._NotificationService.error(error.error.menssage);
    });
  }

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

  //#region Filtro
  FiltroOpen(){
    this.MenuFiltro.open();
  }

  EventeMenuFiltro(Menu: PoPageSlideComponent){
    this.MenuFiltro = Menu;
  }

  EventeFiltro(FiltrosSelect: Filtros){
    this.filtros = FiltrosSelect;

    this.carregarGrid();
    console.log(this.filtros)

  }
  //#endregion Filtro

}
