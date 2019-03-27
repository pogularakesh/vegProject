import { Component, OnInit } from '@angular/core';
import { VegService } from '../services/veg.service';
import { Router } from '@angular/router';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: any

  constructor(private vs:VegService,private router:Router) { }

  ngOnInit() {
    this.vs.cartDetails(parseInt(localStorage.getItem('userid'))).subscribe((data) => {
      this.cart = data
      console.log(data)
    })
  }
  btnDel(i: number) {
    alert(i)
    this.vs.DeleteVeg(i, localStorage.getItem('userid')).subscribe((data) => {
      console.log(data)
      alert('deleted')
      location.reload()
      this.router.navigate(['cart'])
    })
  }

}
