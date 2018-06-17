import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlunosDeactivatedGuard } from './../guard/alunos-deactivate.guard';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes: Routes = [
	{path:'', component: AlunosComponent, children: [
		{path:'novo', component: AlunoFormComponent },
		{path:':id', component: AlunoDetalheComponent, resolve: { aluno: AlunoDetalheResolver } },
		{path:':id/editar', component: AlunoFormComponent, canDeactivate: [AlunosDeactivatedGuard] }
	]},
	
];

@NgModule({
	imports: [RouterModule.forChild(alunosRoutes)],
	exports: [RouterModule]
}) 

export class AlunosRoutingModule {}