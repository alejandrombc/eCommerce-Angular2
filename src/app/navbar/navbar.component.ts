import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../globals.component';
import { Router } from "@angular/router";
import { Http, Headers} from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	public busqueda_form = this.fb.group({
    	  cuerpo: [""],
	});

  	constructor(public http: Http, public fb: FormBuilder, private servicio: GlobalService, private router:Router) {}

  	cerrar_sesion () {
		this.servicio.tokenize.is_valid = false;
		this.servicio.tokenize.token = null;
		localStorage.removeItem("access_token");
		localStorage.removeItem("carrito");
		this.servicio.carrito_size = 0;
		this.router.navigate(['']);
		alert("Hasta Luego!");
	}

	busqueda(){
		let formData = this.busqueda_form.value;
		var headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    let salida; 

	    this.http.post('http://localhost:5000/producto_buscar', JSON.stringify(formData),{ headers: headers })      
	    .subscribe(res => {
	            salida = res.json();
	           	this.servicio.search = salida;
	            this.router.navigate(['/busqueda']);
	      }, error => {
	          console.log(error.json());
	      });
	}

  	ngOnInit() {}

}
