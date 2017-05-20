import { Component } from '@angular/core';
import { GlobalService } from './globals.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';

  constructor(private servicio: GlobalService){
  	servicio.check_token();
  }
  
}
