import {RouterModule, Routes} from '@angular/router';
import { IndexComponent } from './index/index.component';

const app_routes: Routes = [
	{ path : '', component: IndexComponent },
];

export const app_routing = RouterModule.forRoot(app_routes);
