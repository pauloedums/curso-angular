import { MaterializeModule } from 'angular2-materialize';

import { AuthGuard } from './guard/auth.guard';
import { CursosGuard } from './guard/cursos.guard';
import { AlunosGuard } from './guard/alunos.guard';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { routing } from './app.routing';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
// import { CursosService } from './cursos/cursos.service';


import { AppRoutingModule } from './app.routing.module';

import { AuthService } from './login/auth.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

// import { CursosModule } from './cursos/cursos.module';
// import { AlunosModule } from './alunos/alunos.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    // CursosModule,
    // AlunosModule
    // routing
  ],
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard
  ],
  // providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
