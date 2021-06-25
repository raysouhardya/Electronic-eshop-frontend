import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewproductspecsbyproductidComponent } from './viewproductspecsbyproductid/viewproductspecsbyproductid.component';
import { ViewproductspecsbyspecidComponent } from './viewproductspecsbyspecid/viewproductspecsbyspecid.component';
import { AddproductspecsComponent } from './addproductspecs/addproductspecs.component';
import { ViewallcategoryComponent } from './viewallcategory/viewallcategory.component';
import { ViewproductsbycategorynameComponent } from './viewproductsbycategoryname/viewproductsbycategoryname.component';
import { ViewproductsbyproductIdComponent } from './viewproductsbyproduct-id/viewproductsbyproduct-id.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewproductspecsbyproductidComponent,
    ViewproductspecsbyspecidComponent,
    AddproductspecsComponent,
    ViewallcategoryComponent,
    ViewproductsbycategorynameComponent,
    ViewproductsbyproductIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
