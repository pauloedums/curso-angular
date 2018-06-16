import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-clico',
  templateUrl: './clico.component.html',
  styleUrls: ['./clico.component.css']
})
export class ClicoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

	@Input() valorInicial = 10;

  constructor() {
  	this.log('constructor');
  }
  ngOnChanges(){
  	this.log('ngOnChanges');
  }
  ngOnInit() {
  	this.log('ngOnInit');
  }
  ngDoCheck() {
  	this.log('ngDoCheck');
  }
  ngAfterContentInit() {
  	this.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
  	this.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
  	this.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
  	this.log('ngAfterViewChecked');
  }
  
  ngOnDestroy() {
  	this.log('ngOnDestroy');
  }
  private log(hook: string){
  	console.log(hook);
  }

}
