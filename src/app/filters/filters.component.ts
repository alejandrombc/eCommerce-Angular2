import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  	@Output() eventRefresh = new EventEmitter<any>();

  	constructor() { }



	refresh(){
	    alert("calling playTrack from child 2:");  
	    this.eventRefresh.next();
	}

  	ngOnInit() {
  	
  	}

}
