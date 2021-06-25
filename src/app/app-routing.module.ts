import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductspecsComponent } from './addproductspecs/addproductspecs.component';
import { ViewallcategoryComponent } from './viewallcategory/viewallcategory.component';
import { ViewproductsbycategorynameComponent } from './viewproductsbycategoryname/viewproductsbycategoryname.component';
import { ViewproductsbyproductIdComponent } from './viewproductsbyproduct-id/viewproductsbyproduct-id.component';
import { ViewproductspecsbyproductidComponent } from './viewproductspecsbyproductid/viewproductspecsbyproductid.component';
import { ViewproductspecsbyspecidComponent } from './viewproductspecsbyspecid/viewproductspecsbyspecid.component';

const routes: Routes = 
[
  {path:'viewbycategoryname/viewbycategoryname/viewproductspecsbyproductid/:prodId',component:ViewproductspecsbyproductidComponent},
  {path:'viewproductspecsbyspecid',component:ViewproductspecsbyspecidComponent},                      
  { path:'addproductspecs',component:AddproductspecsComponent},
  {path:'viewbycategoryname',component:ViewproductsbycategorynameComponent},
  {path:'viewbyproductId',component:ViewproductsbyproductIdComponent},
  {path:'viewall',component:ViewallcategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
