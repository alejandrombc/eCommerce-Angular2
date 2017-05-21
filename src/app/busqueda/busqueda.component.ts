import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../globals.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

	constructor(private servicio: GlobalService) { 
	}

	ngOnInit() {
	}

}
