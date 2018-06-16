import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
	url: string = 'http://loiane.training';
	cursoAngular: boolean = true;
	urlImagem: string = 'https://picsum.photos/g/200/300';
	valorAtual: string = "";
	valorSalvo: string = "";

	isMouseOver: boolean = false;

	nomeDoCurso: string = "Angular";

	valorInicial = 15;
	
	getValor(){
		return 1;
	}
	getCurtirCurso(){
		return true;
	}

	botaoClicado(){
		alert('botão foi clicado');
	}
	onKeyUp(event: KeyboardEvent){
		this.valorAtual = (<HTMLInputElement>event.target).value;
	}
	salvarValor(valor){
		this.valorSalvo = valor;
	}
	onMouseOverOut(){
		this.isMouseOver = !this.isMouseOver;
	}

	onMudouValor(event){
		console.log(event.novoValor);

	}
  constructor() { }

  ngOnInit() {
  }

}
