import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../globals.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  	constructor(private servicio: GlobalService, private router:Router) {}

  	cerrar_sesion () {
		this.servicio.tokenize.is_valid = false;
		this.servicio.tokenize.token = null;
		localStorage.removeItem("access_token");
		localStorage.removeItem("carrito");
		this.servicio.carrito_size = 0;
		this.router.navigate(['']);
		alert("Hasta Luego!");
	}

  	ngOnInit() {}

}
