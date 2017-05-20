import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { GlobalService } from '../globals.component';
import { Router } from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {

	public user = {"nombre": "" , "email": "", "username": ""};
	public coments = []
	public product_form = this.fb.group({
		  nombre: [""],
		  precio: [""],
		  foto: [""],
		  idCategoria: [""],
		  descripcion: [""]
	});


	public comment_form = this.fb.group({
		  user_id: [""],
		  cuerpo: [""]
	});


	constructor(public fb: FormBuilder ,public http: Http, private servicio: GlobalService, private router:Router) {
		if(servicio.tokenize.is_valid){
			var headers = new Headers();
			headers.append('access_token', servicio.tokenize.token); 
			this.http.get('http://localhost:5000/usuario', { headers: headers })
				.subscribe(res => {
							this.user = res.json();
							var headers = new Headers();
							headers.append('email', this.user.email); 
							this.http.get('http://localhost:5000/comentarios', { headers: headers })
							.subscribe(res => {
										this.coments = res.json()
									   });
						});


		}else{
			this.router.navigate(['']);
		}
	}

	new_product(){
		let formData = this.product_form.value;
		var headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    let salida; 

	    this.http.post('http://localhost:5000/productos', JSON.stringify(formData),{ headers: headers })      
	    .subscribe(res => {
	            salida = res.json();
	            if(salida['product_value']){
	            	alert(salida['message']);
	            	this.router.navigate(['']);
	            }else{
	              alert(salida['message']);
	            }


	      }, error => {
	          console.log(error.json());
	      });
	}

	new_comment(){
		let formData = this.comment_form.value;
		formData.user_id = this.user.email;
		var headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    let salida; 

	    this.http.post('http://localhost:5000/comentarios', JSON.stringify(formData),{ headers: headers })      
	    .subscribe(res => {
	            salida = res.json();
	            if(salida['comment_value']){
	            	this.comment_form.reset();
					var headers = new Headers();
					headers.append('email', this.user.email); 
					this.http.get('http://localhost:5000/comentarios', { headers: headers })
					.subscribe(res => {
								this.coments = res.json()
							   });
	            }else{
	              alert(salida['message']);
	            }


	      }, error => {
	          console.log(error.json());
	      });
	}

	ngOnInit() {

	}

}
