import { Servicos } from './../../models/ServicoList';
import { Component, EventEmitter, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { PoModalAction, PoModalComponent, PoNotificationService, PoPageAction, PoPageSlideComponent, PoTableColumn } from '@po-ui/ng-components';
import { ServiceServicoService } from 'src/app/Services/service-servico.service';

@Component({
  selector: 'app-nav-cadastro-servico',
  templateUrl: './nav-cadastro-servico.component.html',
  styleUrls: ['./nav-cadastro-servico.component.css']
})
export class NavCadastroServicoComponent implements OnInit {
  @ViewChild("pageSlide", { static: true }) PageSlide: PoPageSlideComponent;
  @ViewChild("poModalExclusaoLinha", { static: true }) ModalExcluir: PoModalComponent;
  @Output() OutPageSlide = new EventEmitter<PoPageSlideComponent>();

  isTelaLoad: boolean = false;
  isGridLoad: boolean = false;
  NomeServico: string = "";
  DescricaoServico: string = "";
  Valor: number;
  linhaExcluir: Servicos|undefined = undefined;

  grid: Servicos[];

  readonly columns: Array<PoTableColumn> = [
    { property: 'NomeServico', label: 'Nome Interno', width: 'auto' },
    { property: 'Descricao', label: 'Descrição', width: 'auto' },
    { property: 'Valor', label: 'Valor', width: 'auto', type: 'currency' },
  ];
  actions: Array<PoPageAction> = [
    { label: 'Remover', action: this.removerGrupo.bind(this), icon: "po-icon po-icon-delete"}
  ]

  constructor(private _servico: ServiceServicoService, private _NotificationService: PoNotificationService) { }

  ngOnInit(): void {
    this.OutPageSlide.emit(this.PageSlide);
    this.CarregarGrid();
  }

  //#region Metodos
  CarregarGrid(){
    this.isGridLoad = true;
    this._servico.getServicos().subscribe(x => {
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

  SalvarGrupo(){
    this.isTelaLoad = true;
    var body: Servicos = new Servicos();

    body.Descricao = this.DescricaoServico;
    body.NomeServico = this.NomeServico;
    body.Valor = this.Valor;

    this._servico.postServicos(body).subscribe(x => {
      this.DescricaoServico = "";
      this.NomeServico = "";
      this.Valor = undefined;

      this.isTelaLoad = false;
      this._NotificationService.success("Serviço salvo com sucesso.")
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


  removerGrupo(linha: Servicos){
    this.linhaExcluir = linha;
    this.ModalExcluir.open();
  }
  confirmarExclusaoServico: PoModalAction = {
    action: () => {
      this.RemoverLinha();
      this.ModalExcluir.close();
    },
    label: 'Confirmar'
  };
  cancelarExclusaoServico: PoModalAction = {
    action: () => {
      this.linhaExcluir = undefined;
      this.ModalExcluir.close();
    },
    label: 'Sair'
  };

  RemoverLinha(){
    this.isGridLoad = true;
    this._servico.deleteServicos(this.linhaExcluir.Id).subscribe(x => {
      this.isGridLoad = false;
      this._NotificationService.success("Serviço excluído com sucesso.")
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
