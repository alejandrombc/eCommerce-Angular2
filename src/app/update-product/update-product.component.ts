import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from "@angular/router";
import { Http, Headers} from '@angular/http';
import { GlobalService } from '../globals.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

 	id:number; //ID del producto, con esto hago el GET al API
	private sub: any;

	public product = { "foto": "", "nombre": "", "cantVendida": "", "precio": "", "descripcion": "" , "idCategoria" : ""};

	public product_form_update = this.fb.group({
		  foto: [""],
		  nombre: [""],
		  precio: [""],
		  descripcion: [""],
		  idCategoria: [""],
	});


  	constructor(private route:ActivatedRoute, private router:Router, public http: Http, private servicio: GlobalService, public fb: FormBuilder) {
  		if(!servicio.tokenize.is_valid){
  			this.router.navigate(['']);
  		}
  	}


  	edit_product(){
  		let formData = this.product_form_update.value;

  		if(formData['nombre'] == "") formData['nombre'] = this.product['nombre'] ;
		if(formData['foto'] == "") formData['foto'] = this.product['foto'] ;
		if(formData['descripcion'] == "") formData['descripcion'] = this.product['descripcion'] ;
		if(formData['precio'] == "") formData['precio'] = this.product['precio'] ;
		if(formData['idCategoria'] == "") formData['idCategoria'] = this.product['idCategoria'] ;

	  	var headers = new Headers();
	    headers.append('Content-Type', 'application/json');

	    console.log(formData);
	  	this.http.put('http://localhost:5000/productos/' + this.id, JSON.stringify(formData),{ headers: headers })      
	  	.subscribe(data => {
	            alert(data.json()['message']);
	            this.router.navigate(['product/'+this.id]);
	      }, error => {
	          console.log(error.json());
	      });

  	}

  	ngOnInit() {
  		this.sub = this.route.params.subscribe(params => {
       		this.id = +params['id'];  });

      	this.http.get('http://localhost:5000/productos/'+this.id)
     		.subscribe(res => {
                this.product = res.json()
                console.log(this.product);
            });
  	}

}
