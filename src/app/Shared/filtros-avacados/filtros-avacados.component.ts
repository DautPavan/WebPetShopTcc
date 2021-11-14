import { Filtros } from './../../models/Filtros';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { PoModalComponent, PoPageSlideComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-filtros-avacados',
  templateUrl: './filtros-avacados.component.html',
  styleUrls: ['./filtros-avacados.component.css']
})
export class FiltrosAvacadosComponent implements OnInit {
  @ViewChild("pageSlide", { static: true }) PageSlide: PoPageSlideComponent;
  @Output() OutPageSlide = new EventEmitter<PoPageSlideComponent>();
  @Output() OutFiltros = new EventEmitter<Filtros>();

  DateFiltro: string;

  constructor() { }

  ngOnInit(): void {
    this.OutPageSlide.emit(this.PageSlide);
    var fil: Filtros = new Filtros();

    fil.Data = this.DateFiltro;
    this.OutFiltros.emit(fil);
  }


  filtrar(){
    var fil: Filtros = new Filtros();

    fil.Data = this.DateFiltro;

    this.OutFiltros.emit(fil);
    this.PageSlide.close();
  }

}
