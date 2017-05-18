import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-prod',
  templateUrl: './feed-prod.component.html',
  styleUrls: ['./feed-prod.component.css']
})
export class FeedProdComponent implements OnInit {


 	refreshProd(){
    	alert("YES!!");
	}
	
	constructor() { }

	ngOnInit() {
	
	}

}
