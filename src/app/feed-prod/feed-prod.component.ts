import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Component({
  selector: 'app-feed-prod',
  templateUrl: './feed-prod.component.html',
  styleUrls: ['./feed-prod.component.css']
})
export class FeedProdComponent implements OnInit {

	public offset;
	public products = [];
	public more_products;
	public alfabetico;
	public precio;
	public categoria;
	public sort;
	
	constructor(public http: Http) {
		this.offset = 0;
		this.more_products = false;
		this.alfabetico = 1;
		this.sort = 0;
		this.categoria = 1;
		this.precio = 1;
		this.refreshProd();
	}

	refreshProd(){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let json_val =  {'offset': this.offset, 'sort':this.sort, 'idAlfabetico': this.alfabetico, 'idC':this.categoria, 'idPrecio':this.precio};
		let salida;
			this.http.post('http://localhost:5000/products', JSON.stringify(json_val),{ headers: headers })      
			.subscribe (res => {
				for (var i = 0; i < res.json().length; i++) {
					this.products.push(res.json()[i]);
				}
				if(res.json().length < 6) this.more_products = false;
				else this.more_products = true; 
		        this.offset += 6;
		  	}, error => {
		      console.log(error.json());
		  	});    
	}

	refreshProdCatCelular(){
		this.sort = 1;
		this.offset = 0;
		this.products = [];
		this.categoria = 1;
		this.refreshProd();
	}

	refreshProdCatJuego(){
		this.sort = 1;
		this.offset = 0;
		this.products = [];
		this.categoria = 2;
		this.refreshProd();
	}

	refreshProdCatDeporte(){
		this.sort = 1;
		this.offset = 0;
		this.products = [];
		this.categoria = 3;
		this.refreshProd();
	}

	refreshProdAlf(){
		this.sort = 2;
		if(this.alfabetico == 1) this.alfabetico = 2;
		else this.alfabetico = 1;
		this.offset = 0;
		this.products = [];
		this.refreshProd();
	}

	refreshProdPre(){
		if(this.precio == 1) this.precio = 2;
		else this.precio = 1;
		this.sort = 3;
		this.offset = 0;
		this.products = [];
		this.refreshProd();
	}

	ngOnInit() {
	
	}

}
