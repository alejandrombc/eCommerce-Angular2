import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http, Headers} from '@angular/http';
import {Router} from "@angular/router";


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
	
	constructor(public fb: FormBuilder, public http: Http, private router:Router) {
	}


	create_user(){
		alert("sirve");
	}

	ngOnInit() {
	
	}

}
