import { RouterModule, Routes} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProductComponent } from './product/product.component';
import { PrepurcharseComponent } from './prepurcharse/prepurcharse.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { BillComponent } from './bill/bill.component';

const app_routes: Routes = [
	{ path : '', component: IndexComponent },
	{ path : 'register', component: RegisterComponent },
	{ path : 'login', component: LoginComponent },
	{ path : 'perfil', component: PerfilComponent },
	{ path : 'product/:id', component: ProductComponent },
	{ path : 'update_product/:id', component: UpdateProductComponent },
	{ path : 'pre_purchase', component: PrepurcharseComponent },
	{ path : 'checkout', component: CheckoutComponent },
	{ path : 'bill', component: BillComponent },
	{ path : '**', pathMatch: 'full', redirectTo: ''}
];

export const app_routing = RouterModule.forRoot(app_routes);
