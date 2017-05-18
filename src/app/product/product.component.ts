import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	id:number; //ID del producto, con esto hago el GET al API
	private sub: any;
  	constructor(private route:ActivatedRoute) { }

  	ngOnInit() {
  		this.sub = this.route.params.subscribe(params => {
       	this.id = +params['id'];  });
  	}	

}


