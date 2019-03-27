import { Component, OnInit } from '@angular/core';
import { VegService } from '../services/veg.service';
import { Router } from '@angular/router';
import { vegetable } from '../model/veg';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  veg:vegetable;
  vegetable: any
  cart: any

  constructor(private vs:VegService,private router:Router) { 
    this.veg=new vegetable();
  }
  addCart(i: number) {
    //alert('srrgh')
    let user: any
    user = localStorage.getItem('userid')
    this.vs.AddtoCart(i, user).subscribe(
      (data) => {
        alert('1 Item added to cart')
        this.router.navigate(['cart'])
      })
  }

  ngOnInit() {
    this.vs.GetAllVeg().subscribe((data)=>{
      console.log(data)
    this.veg=data;
    this.vs.cart().subscribe((data) => {
      this.cart = data
      console.log('vegetable' + this.vegetable)
    })
    
    })
  }
  detailsClick(a:any){
    alert("clicked")
    this.router.navigate(['VegDetails/'+a])

  }

}
