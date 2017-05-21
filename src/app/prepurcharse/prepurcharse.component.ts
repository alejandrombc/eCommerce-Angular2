import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Component({
  selector: 'app-prepurcharse',
  templateUrl: './prepurcharse.component.html',
  styleUrls: ['./prepurcharse.component.css']
})
export class PrepurcharseComponent implements OnInit {

	public carrito
	public products

  	constructor(public http: Http) {
          this.carrito = localStorage.getItem("carrito");
          if(this.carrito != null){
          	let ids = [];
            this.carrito = JSON.parse(this.carrito);
            for (var i = 0; i < this.carrito['carrito'].length; i++) {
            	ids.push(this.carrito['carrito'][i]);
            }

			var headers = new Headers();
			headers.append('Content-Type', 'application/json');
			let ids_to_send = {'ids': ids};
			let salida;
			this.http.post('http://localhost:5000/searchproduct', JSON.stringify(ids_to_send), { headers: headers })
			.subscribe (res => {
		        salida = res.json();
		        this.products = salida;
		  	}, error => {
		      console.log(error.json());
		  	});    

          }
  	}

  	ngOnInit() {
  	}

}
