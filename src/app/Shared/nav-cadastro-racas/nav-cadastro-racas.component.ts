import { Servicos } from './../../models/ServicoList';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { PoComboOption, PoComboOptionGroup, PoModalAction, PoModalComponent, PoNotificationService, PoPageAction, PoPageSlideComponent, PoTableColumn } from '@po-ui/ng-components';
import { ServiceServicoService } from 'src/app/Services/service-servico.service';
import { Raca } from 'src/app/models/Raca';

@Component({
  selector: 'app-nav-cadastro-racas',
  templateUrl: './nav-cadastro-racas.component.html',
  styleUrls: ['./nav-cadastro-racas.component.css']
})

export class NavCadastroRacasComponent implements OnInit {
  @ViewChild("pageSlideRaca", { static: true }) PageSlide: PoPageSlideComponent;
  @ViewChild("poModalExclusaoLinha", { static: true }) ModalExcluir: PoModalComponent;
  @Output() OutPageSlideRaca = new EventEmitter<PoPageSlideComponent>();

  isTelaLoad: boolean = false;
  isGridLoad: boolean = false;
  NomeRaca: string = "";
  Combo: number = undefined;
  linhaExcluir: Raca = undefined;
  options: Array<PoComboOption | PoComboOptionGroup> = [
    { label: "Pequeno", value: 1 },
    { label: "Medio", value: 2  },
    { label: "Grande", value: 3 }
  ];

  grid: Raca[];

  readonly columns: Array<PoTableColumn> = [
    { property: 'Nome', label: 'Nome da Raça', width: 'auto' },
    {
      property: 'PorteRaca',
      label: 'Porte Raça',
      width: 'auto',
      type: 'label',
      labels: [
        { value: 1, color: 'color-01', label: 'Pequeno' },
        { value: 2, color: 'color-08', label: 'Médio' },
        { value: 3, color: 'color-05', label: 'Grande' }
      ]
    }
  ];
  actions: Array<PoPageAction> = [
    { label: 'Remover', action: this.removerGrupo.bind(this), icon: "po-icon po-icon-delete"}
  ]

  constructor(private _servico: ServiceServicoService, private _NotificationService: PoNotificationService) { }

  ngOnInit(): void {
    this.OutPageSlideRaca.emit(this.PageSlide);
    this.CarregarGrid();
  }

  //#region Metodos
  CarregarGrid(){
    this.isGridLoad = true;
    this._servico.getRaca().subscribe(x => {
      this.grid = [...x];
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

  EscolherPorte(tipo: any){
    this.Combo = tipo;
  }

  SalvarGrupo(){
    this.isTelaLoad = true;
    var body: Raca = new Raca();

    body.Nome = this.NomeRaca;
    body.PorteRaca = this.Combo;

    this._servico.postRaca(body).subscribe(x => {
      this.NomeRaca = "";

      this.isTelaLoad = false;
      this._NotificationService.success("Raça salvo com sucesso.")
    },
    error => {
      if (error.status >= 400 && error.status < 500){
        this.isTelaLoad = false;
        this._NotificationService.warning(error.error.messagem);
        return;
      }
      this.isTelaLoad = false;
      this._NotificationService.error(error.error.messagem);
    },
    () => {
      this.CarregarGrid();
    });

  }


  removerGrupo(linha: Raca){
    this.linhaExcluir = linha;
    this.ModalExcluir.open();
  }
  confirmarExclusaoRaca: PoModalAction = {
    action: () => {
      this.RemoverLinha();
      this.ModalExcluir.close();
    },
    label: 'Confirmar'
  };
  cancelarExclusaoRaca: PoModalAction = {
    action: () => {
      this.linhaExcluir = undefined;
      this.ModalExcluir.close();
    },
    label: 'Sair'
  };

  RemoverLinha(){
    this.isGridLoad = true;
    this._servico.deleteRaca(this.linhaExcluir.Id).subscribe(x => {
      this.isGridLoad = false;
      this._NotificationService.success("Raça excluído com sucesso.")
    },
    error => {
      if (error.status >= 400 && error.status < 500){
        this.isGridLoad = false;
        this._NotificationService.warning(error.error.messagem);
        return;
      }
      this.isGridLoad = false;
      this._NotificationService.error(error.error.messagem);
    },
    ()=>{
      this.CarregarGrid();
    });
  }


  //#endregion Metodos
}
