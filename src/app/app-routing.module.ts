import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ServicesModule } from './services/services.module';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path: 'services', component: ServicesComponent},
  {path :'contact-us',component:ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ServicesModule],
  exports: [RouterModule, ServicesModule]
})
export class AppRoutingModule { }
