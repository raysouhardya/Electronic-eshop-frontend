import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductspecsComponent } from './addproductspecs/addproductspecs.component';
import { ViewproductspecsComponent } from './viewproductspecs/viewproductspecs.component';
import { ViewproductspecsbyproductidComponent } from './viewproductspecsbyproductid/viewproductspecsbyproductid.component';
import { ViewproductspecsbyspecidComponent } from './viewproductspecsbyspecid/viewproductspecsbyspecid.component';

const routes: Routes = 
[
  {                       path:'viewproductspecs',component:ViewproductspecsComponent,
                          children:[{path:'byproductid',component:ViewproductspecsbyproductidComponent},
                                    {path:'byspecid',component:ViewproductspecsbyspecidComponent}]
                         
  },{ path:'addproductspecs',component:AddproductspecsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
