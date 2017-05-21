import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http, Headers} from '@angular/http';
import { Router } from "@angular/router";
import { GlobalService } from '../globals.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
	public products;
	public subtotal = 0;
	public user = {"nombre": "" , "email": "", "username": ""};

	public checkout_form = this.fb.group({
  		email: [""],
		id_first_formControlName: [""],
		id_address_line_1: [""],
		id_address_line_2: [""],
		id_city: [""],
		id_state: [""],
		codigo_postal: [""],
		telefono: [""],
		card_exp_month: [""],
		card_exp_year: [""],
		card_cvc: [""],
		name_on_card: [""],
		card_number: [""]
  	});

  	public ids_to_send;


	constructor(public fb: FormBuilder, public http: Http, private servicio: GlobalService, private router:Router) {
		if (servicio.tokenize.is_valid) {
			var carrito;
 			let ids = [];
 			carrito = localStorage.getItem("carrito");

	        carrito = JSON.parse(carrito);
	        for (var i = 0; i < carrito['carrito'].length; i++) {
	        	ids.push(carrito['carrito'][i]['id']);
	        }

			var headers = new Headers();
			headers.append('Content-Type', 'application/json');
			this.ids_to_send = {'ids': ids};

			let salida;
			this.http.post('http://localhost:5000/searchproduct', JSON.stringify(this.ids_to_send), { headers: headers })
			.subscribe (res => {
		        salida = res.json();
		        this.products = salida;
            var N = this.products.length;
            for (var i = 0; i < N; ++i) {
              this.subtotal += this.products[i]['precio'];
            }            
		  	}, error => {
		      console.log(error.json());
		  	});    

	        headers.append('access_token', servicio.tokenize.token); 
	        this.http.get('http://localhost:5000/usuario', { headers: headers })
          	.subscribe(res => {
                this.user = res.json();
              });

		} else {
			this.router.navigate(['']);
		}
	}

	checkout(){
		let formData = this.checkout_form.value;

		if (formData['id_first_formControlName'] == '' ) formData['id_first_formControlName'] = this.user['nombre'];

		this.servicio.user_checkout['id_first_formControlName'] = formData['id_first_formControlName'];
		this.servicio.user_checkout['id_address_line_1'] = formData['id_address_line_1'];
		this.servicio.user_checkout['id_address_line_2'] = formData['id_address_line_2'];
		this.servicio.user_checkout['id_city'] = formData['id_city'];
		this.servicio.user_checkout['id_state'] = formData['id_state'];
		this.servicio.user_checkout['codigo_postal'] = formData['codigo_postal'];
		this.servicio.user_checkout['telefono'] = formData['telefono'];
		this.servicio.user_checkout['card_exp_month'] = formData['card_exp_month'];
		this.servicio.user_checkout['card_exp_year'] = formData['card_exp_year'];
		this.servicio.user_checkout['card_cvc'] = formData['card_cvc'];
		this.servicio.user_checkout['name_on_card'] = formData['name_on_card'];
		this.servicio.user_checkout['card_number'] = formData['card_number'];


		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post('http://localhost:5000/nueva_compra', JSON.stringify(this.ids_to_send), { headers: headers })
			.subscribe (res => {
		        this.router.navigate(['/bill']);
		  	}, error => {
		      console.log(error.json());
		  	});    

  	}

	ngOnInit() {
	}

}