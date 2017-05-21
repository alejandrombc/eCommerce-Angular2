import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

    public activo;

  	@Output() eventCategoriaCelular = new EventEmitter<any>();
    @Output() eventCategoriaJuegos = new EventEmitter<any>();
    @Output() eventCategoriaDeporte = new EventEmitter<any>();
    @Output() eventAlfabetico = new EventEmitter<any>();
    @Output() eventPrecio = new EventEmitter<any>();

  	constructor() { }

    getActive(choice: string) : string{
       if(this.activo == choice)
            return "active";
       else
            return "not";

   }

    //Llama a una funcion del componente feed
	  refresh_categoria_celular(choice: string){
       this.activo = choice;
	     this.eventCategoriaCelular.next();
	  }

    refresh_categoria_juego(choice: string){
       this.activo = choice;
       this.eventCategoriaJuegos.next();
    }

    refresh_categoria_deportes(choice: string){
       this.activo = choice;
       this.eventCategoriaDeporte.next();
    }

    refresh_alfabeticamente(choice: string){
       this.activo = choice;
       this.eventAlfabetico.next();
    }

    refresh_precio(choice: string){
       this.activo = choice;
       this.eventPrecio.next();
    }

  	ngOnInit() {
  	
  	}

}
