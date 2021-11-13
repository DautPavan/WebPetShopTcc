import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NavCadastroServicoComponent } from './Shared/nav-cadastro-servico/nav-cadastro-servico.component';
import { NavCadastroRacasComponent } from './Shared/nav-cadastro-racas/nav-cadastro-racas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavCadastroServicoComponent,
    NavCadastroRacasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PoModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
