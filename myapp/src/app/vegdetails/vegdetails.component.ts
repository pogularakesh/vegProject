import { Component, OnInit } from '@angular/core';
import { vegetable } from '../model/veg';
import { Router, ActivatedRoute } from '@angular/router';
import { VegService } from '../services/veg.service';

@Component({
  selector: 'app-vegdetails',
  templateUrl: './vegdetails.component.html',
  styleUrls: ['./vegdetails.component.css']
})
export class VegdetailsComponent implements OnInit {
  veg:vegetable;

  constructor( private router:Router,private arc:ActivatedRoute,private vs:VegService) {
    this.veg=new vegetable()
   }

  ngOnInit() {
    let v=this.arc.snapshot.params.id;
    this.vs.getvgDetails(v).subscribe((data)=>{
      console.log(data)
      this.veg.vname=data[0].vname;
      //this.veg.vimage=data[0].vimage;
      this.veg.quantity=data[0].quantity;
      this.veg.price=data[0].price;
      this.veg.discount=data[0].discount;

    })
  }

}
