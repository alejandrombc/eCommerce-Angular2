import { Component, OnInit } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public http: Http) {}

  ngOnInit() {
  }

}
