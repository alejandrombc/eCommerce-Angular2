import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http, Headers} from '@angular/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	  public login_form = this.fb.group({
    	  email: [""],
    	  password: [""],
	  });

  	constructor(public fb: FormBuilder, public http: Http, private router:Router) { }


  	create_token(){
  		
  	}

  	ngOnInit() {
   	
   	}

}
