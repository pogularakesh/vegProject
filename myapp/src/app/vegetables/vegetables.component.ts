import { Component, OnInit } from '@angular/core';
import { vegetable } from '../model/veg';
import { VegService } from '../services/veg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {
  veg:vegetable;

  constructor(private vs:VegService,private router:Router) { 
    this.veg=new vegetable();
  }

  ngOnInit() {
    this.vs.GetAllVeg().subscribe((data)=>{
      console.log(data)
    this.veg=data;
  })

}
}
