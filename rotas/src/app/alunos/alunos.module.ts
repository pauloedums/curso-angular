import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AlunosDeactivatedGuard } from './../guard/alunos-deactivate.guard';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';

import { AlunosService } from './alunos.service';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule
  ],
  exports: [],
  declarations: [
    
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],
  providers: [AlunosService, AlunosDeactivatedGuard, AlunoDetalheResolver]
})
export class AlunosModule { }
