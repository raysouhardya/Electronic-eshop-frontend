import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewproductspecsbyproductid',
  templateUrl: './viewproductspecsbyproductid.component.html',
  styleUrls: ['./viewproductspecsbyproductid.component.css']
})
export class ViewproductspecsbyproductidComponent implements OnInit {

  productid:number;
  msg:String;
  specs:any=[];
  constructor(public productservice:ProductService) { }

  ngOnInit() {
  }

  viewbyproductid():void
  {
    if(this.productid==undefined||this.productid==null||this.productid<=0)
    {
      this.msg="Enter the Product Id greater than 0";
      return ;
    }
    this.productservice.viewproductspecsbyproductid(this.productid).subscribe
    (
      data=>
      {
        console.log(data);
        this.specs=data;
        this.msg=undefined;
      },
      error=>
      {
        console.log(error);
        this.msg=error.error.message;
        this.specs=undefined;
      }
    )
  }
}
