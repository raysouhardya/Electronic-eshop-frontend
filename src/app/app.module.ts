import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewproductspecsComponent } from './viewproductspecs/viewproductspecs.component';
import { ViewproductspecsbyproductidComponent } from './viewproductspecsbyproductid/viewproductspecsbyproductid.component';
import { ViewproductspecsbyspecidComponent } from './viewproductspecsbyspecid/viewproductspecsbyspecid.component';
import { AddproductspecsComponent } from './addproductspecs/addproductspecs.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewproductspecsComponent,
    ViewproductspecsbyproductidComponent,
    ViewproductspecsbyspecidComponent,
    AddproductspecsComponent
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
