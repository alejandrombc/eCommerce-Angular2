import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../globals.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  	constructor(private servicio: GlobalService) {
  	}

  	ngOnInit() {
  	}

}
