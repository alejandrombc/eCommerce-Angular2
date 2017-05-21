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
  public is_in;

  public product = { "foto": "", "nombre": "", "cantVendida": "", "precio": "", "descripcion": "" , "idCategoria" : ""};
  public index = -1;

  	constructor(private route:ActivatedRoute, private router:Router, public http: Http, private servicio: GlobalService) {}

    delete_product(){
       this.http.delete('http://localhost:5000/productos/'+this.id)
      .subscribe(res => {
                  this.router.navigate(['']);
                  alert(res.json()['message']);
                });
    }

    delete_from_cart(){
      let carrito = localStorage.getItem("carrito");
      if(carrito != null){
            carrito = JSON.parse(carrito);
            delete carrito['carrito'][this.index];
            if(carrito['carrito'].length > 1){ 
              let new_car = [];
              for (var i = 0; i < carrito['carrito'].length; i++) {
                if( carrito['carrito'][i] != null){
                  new_car.push(carrito['carrito'][i]);
                }
              }
              carrito['carrito'] = new_car;
              localStorage.setItem("carrito", JSON.stringify(carrito));
            }else{
              localStorage.removeItem("carrito");
            }
            this.is_in = false;
            this.servicio.carrito_size-=1;
      }
    }

    add_to_cart(){
      let carrito = localStorage.getItem("carrito");
      if(carrito != null){
            carrito = JSON.parse(carrito);
            carrito['carrito'].push({"id":this.id});
            localStorage.setItem("carrito", JSON.stringify(carrito));
            this.is_in = true;
            this.servicio.carrito_size+=1;
            this.index = carrito['carrito'].length-1;
      }else{
        localStorage.setItem("carrito", JSON.stringify({"carrito":[{"id":this.id}]}));
        this.is_in = true;
        this.servicio.carrito_size+=1;
        this.index = 0;
      } 
    }

  	ngOnInit() {
  		this.sub = this.route.params.subscribe(params => {
       	  this.id = +params['id'];  
          let carrito;
          carrito = localStorage.getItem("carrito");
          if(carrito != null){
            carrito = JSON.parse(carrito);
            this.is_in = false;
            for (var i = 0; i < carrito['carrito'].length; i++) {
              if(carrito['carrito'][i]['id'] == this.id){
                  this.index = i;
                  this.is_in = true;
              }
            }
          }
       });

      this.http.get('http://localhost:5000/productos/'+this.id)
      .subscribe(res => {
                  this.product = res.json()
                });

  	}	

}


