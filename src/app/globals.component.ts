import { Component, Injectable } from '@angular/core'
import { Http, Headers} from '@angular/http';
import { ActivatedRoute , Router} from "@angular/router";


@Injectable()
export class GlobalService {
	public tokenize = {"token": null, "is_valid": false};
	
	public carrito_size = 0;
	public user_checkout = {'email': '', 'id_first_formControlName': '', 'id_address_line_1': '', 'id_address_line_2': '', 'id_city': '', 'id_state': '', 'codigo_postal': '', 'telefono': '', 'card_exp_month': '', 'card_exp_year': '', 'card_cvc': '', 'name_on_card': '', 'card_number': ''};

	constructor(public http: Http, private router:Router) {
		this.carrito_size = 0;
		let carrito = localStorage.getItem("carrito");
      	if(carrito != null){
            carrito = JSON.parse(carrito);
            this.carrito_size = carrito['carrito'].length;
        }
	}


	check_token(){
		this.tokenize.token = localStorage.getItem("access_token");

		if(this.tokenize.token != null){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let token_to_send = {'access_token': this.tokenize.token}; 
		let salida;
			this.http.post('http://localhost:5000/check_token', JSON.stringify(token_to_send),{ headers: headers })      
			.subscribe (res => {
		        salida = res.json();
		        this.tokenize.is_valid = salida['login_value'];
		  	}, error => {
		      console.log(error.json());
		  	});    
		}
	}

	create_token(form){
		let formData = form.value;
	    var headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    let salida; 

	    this.http.post('http://localhost:5000/login', JSON.stringify(formData),{ headers: headers })      
	    .subscribe(res => {
	            salida = res.json();
	            if(salida['login_value'] || (salida['err_value'] && salida['login_value'] != null)){
	              this.tokenize.is_valid = true;
	              this.tokenize.token = salida['access_token'];
	              localStorage.setItem("access_token", this.tokenize.token);
	              this.router.navigate(['']);
	              alert("Bienvenido!");
	            }else{
	              alert("Usuario o peticion invalida");
	            }


	      }, error => {
	          console.log(error.json());
	      });
	}

}