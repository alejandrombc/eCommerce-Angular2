import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from "@angular/router";
import { Http, Headers} from '@angular/http';
import { GlobalService } from '../globals.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

	id:number; //ID del producto, con esto hago el GET al API
	private sub: any;

  public product = { "foto": "", "nombre": "", "cantVendida": "", "precio": "", "descripcion": "" , "idCategoria" : ""};

  	constructor(private route:ActivatedRoute, private router:Router, public http: Http, private servicio: GlobalService) { }

    delete_product(){
       this.http.delete('http://localhost:5000/productos/'+this.id)
      .subscribe(res => {
                  this.router.navigate(['']);
                  alert(res.json()['message']);
                });
    }

  	ngOnInit() {
  		this.sub = this.route.params.subscribe(params => {
       	this.id = +params['id'];  });

      this.http.get('http://localhost:5000/productos/'+this.id)
      .subscribe(res => {
                  this.product = res.json()
                });

  	}	

}


