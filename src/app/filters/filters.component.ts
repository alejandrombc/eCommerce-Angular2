import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  	@Output() eventCategoriaCelular = new EventEmitter<any>();
    @Output() eventCategoriaJuegos = new EventEmitter<any>();
    @Output() eventCategoriaDeporte = new EventEmitter<any>();
    @Output() eventAlfabetico = new EventEmitter<any>();
    @Output() eventPrecio = new EventEmitter<any>();

  	constructor() { }

    //Llama a una funcion del componente feed
	  refresh_categoria_celular(){
	     this.eventCategoriaCelular.next();
	  }

    refresh_categoria_juego(){
       this.eventCategoriaJuegos.next();
    }

    refresh_categoria_deportes(){
       this.eventCategoriaDeporte.next();
    }

    refresh_alfabeticamente(){
       this.eventAlfabetico.next();
    }

    refresh_precio(){
       this.eventPrecio.next();
    }

  	ngOnInit() {
  	
  	}

}
