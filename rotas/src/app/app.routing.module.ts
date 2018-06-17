import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

import { AuthGuard } from './guard/auth.guard';
import { CursosGuard } from './guard/cursos.guard';
import { AlunosGuard } from './guard/alunos.guard';

const appRoutes: Routes = [
	{	
		path: 'cursos',
		loadChildren: '../app/cursos/cursos.module#CursosModule',
		canActivate: [AuthGuard],
		canActivateChild: [CursosGuard],
		canLoad: [AuthGuard]
	},
	{
		path: 'alunos',
		loadChildren: '../app/alunos/alunos.module#AlunosModule',
		canActivate: [AuthGuard],
		canActivateChild: [AlunosGuard],
		canLoad: [AuthGuard]
	},
	{	path: 'login', component: LoginComponent },
	{ 	path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
	{ 	path: '', redirectTo: '/home', pathMatch: 'full' },
	{   path: '**', component: PaginaNaoEncontradaComponent, canActivate: [AuthGuard]}
	// {	path: 'cursos',	component: CursosComponent },
	// {	path: 'curso/:id',	component: CursoDetalheComponent },
	// {	path: 'naoEncontrado',	component: CursoNaoEncontradoComponent }	
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
	exports: [RouterModule]
})

export class AppRoutingModule {

}