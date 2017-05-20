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
	
	constructor(public http: Http) {
		this.offset = 0;
		this.more_products = false;
		this.refreshProd();
	}

	refreshProd(){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let offset_val = {'offset': this.offset}; 
		let salida;
			this.http.post('http://localhost:5000/products', JSON.stringify(offset_val),{ headers: headers })      
			.subscribe (res => {
				for (var i = res.json().length - 1; i >= 0; i--) {
					this.products.push(res.json()[i]);
				}
				if(res.json().length < 6) this.more_products = false;
				else this.more_products = true; 
		        this.offset += 6;
		  	}, error => {
		      console.log(error.json());
		  	});    
	}

	ngOnInit() {
	
	}

}
