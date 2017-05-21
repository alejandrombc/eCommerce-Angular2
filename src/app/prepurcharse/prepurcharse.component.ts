import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { Router } from "@angular/router";
import { GlobalService } from '../globals.component';

@Component({
  selector: 'app-prepurcharse',
  templateUrl: './prepurcharse.component.html',
  styleUrls: ['./prepurcharse.component.css']
})
export class PrepurcharseComponent implements OnInit {

	public carrito;
	public products;
  public user = {"nombre": "" , "email": "", "username": ""};
  public subtotal = 0;

  	constructor(public http: Http, private servicio: GlobalService, private router:Router) {
      this.carrito = localStorage.getItem("carrito");
      if(this.carrito != null){
      	let ids = [];
        this.carrito = JSON.parse(this.carrito);
        for (var i = 0; i < this.carrito['carrito'].length; i++) {
        	ids.push(this.carrito['carrito'][i]['id']);
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
		  	}, error => {
		      console.log(error.json());
		  	});    

          }

      if(servicio.tokenize.is_valid){
        var headers = new Headers();
        headers.append('access_token', servicio.tokenize.token); 
        this.http.get('http://localhost:5000/usuario', { headers: headers })
          .subscribe(res => {
                this.user = res.json();
              });


      }else{
        this.router.navigate(['']);
      }
  	}

    delete_from_cart(id){
      console.log(id);
      let carrito = localStorage.getItem("carrito");
      if(carrito != null){
            carrito = JSON.parse(carrito);
            var N = carrito['carrito'].length;
            for (var i = 0; i < N; ++i) {
              if (carrito['carrito'][i]['id'] == id) {
                delete carrito['carrito'][i];
              }
              if (this.products[i]['id'] == id) {
                this.subtotal -= this.products[i]['precio'];
                delete this.products[i];
              }
            }
           

            if(carrito['carrito'].length > 1){ 
              let new_car = [];
              let new_products = [];
              for (var i = 0; i < carrito['carrito'].length; i++) {
                if( carrito['carrito'][i] != null){
                  new_car.push(carrito['carrito'][i]);
                  
                }
                if (this.products[i] != null) {
                  new_products.push(this.products[i]);
                }
              }
              carrito['carrito'] = new_car;
              this.products = new_products;
              localStorage.setItem("carrito", JSON.stringify(carrito));
            }else{
              localStorage.removeItem("carrito");
              this.products = null;
              this.subtotal = 0;
            }
            this.servicio.carrito_size-=1;
      }
    }





  	ngOnInit() {
  	}

}
