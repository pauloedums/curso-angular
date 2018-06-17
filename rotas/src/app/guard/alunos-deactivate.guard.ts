import { IFormCanDeactivate } from './iform-candeactivate';
import { Observable } from 'rxjs/Rx';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';

@Injectable()
export class AlunosDeactivatedGuard implements CanDeactivate<IFormCanDeactivate> {
 
  canDeactivate(
    component: IFormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
     
     //return component.podeMudarRota();

     return component.podeDesativar();
  }
}