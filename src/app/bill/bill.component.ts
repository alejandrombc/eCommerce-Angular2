import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Router } from "@angular/router";
import { GlobalService } from '../globals.component';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
	public products = [];
	public subtotal = 0;
	public nombre = '';

  constructor(public http: Http, private servicio: GlobalService, private router:Router) {
  	if (servicio.tokenize.is_valid && servicio.user_checkout['id_first_formControlName'] != '' ) {
  		this.nombre = servicio.user_checkout['id_first_formControlName'];
  		var carrito;
		let ids = [];
		carrito = localStorage.getItem("carrito");

	    carrito = JSON.parse(carrito);
	    for (var i = 0; i < carrito['carrito'].length; i++) {
	    	ids.push(carrito['carrito'][i]['id']);
	    }

		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let ids_to_send = {'ids': ids};
		let salida;
		this.http.post('http://localhost:5000/searchproduct', JSON.stringify(ids_to_send), { headers: headers })
		.subscribe (res => {
	        salida = res.json();
	        this.products = salida;

		    var N = this.products.length;
		    for (var i = 0; i < N; ++i) {
		      this.subtotal += this.products[i]['precio'];
		    }  
		    servicio.user_checkout['id_first_formControlName'] = '';
        	localStorage.removeItem("carrito");
        	servicio.carrito_size = 0;    
	  	}, error => {
	      console.log(error.json());
	  	});    




  	} else {
  		this.router.navigate(['']);
  	}


   }

  ngOnInit() {
  }

}
