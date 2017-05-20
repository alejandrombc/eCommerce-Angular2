import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http, Headers} from '@angular/http';
import { Router } from "@angular/router";
import { GlobalService } from '../globals.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


	public registro_form = this.fb.group({
	    nombre: [""],
	    username: [""],
	    email: [""],
	    password: [""]
	});
	
	constructor(public fb: FormBuilder, public http: Http, private router:Router, private servicio: GlobalService) {
	}


	create_user(){
		let formData = this.registro_form.value;
	    var headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    let salida; 

	    this.http.post('http://localhost:5000/register', JSON.stringify(formData),{ headers: headers })      
	    .subscribe(res => {
	            salida = res.json();
	            if(!salida['register_value']){
					alert("Registro o peticion invalida");
	            }else{
	            	this.servicio.create_token(this.registro_form);
	            	this.router.navigate(['']);
	            	alert("Usuario registrado con exito!");

	            }


	      }, error => {
	          console.log(error.json());
	      });
	}

	ngOnInit() {
	
	}

}
