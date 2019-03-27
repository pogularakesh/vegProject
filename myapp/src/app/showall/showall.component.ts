import { Component, OnInit } from '@angular/core';
import { vegetable } from '../model/veg';
import { VegService } from '../services/veg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {
  veg:vegetable;

  constructor(private vs:VegService,private router:Router) {
    this.veg=new vegetable();
   }
   btnDel(n: number) {
     //alert('hhhh')
    this.vs.Deletevegetable(n).subscribe((data) => {
      console.log(data)
    })
     location.reload()
   
  }

  ngOnInit() {
    this.vs.GetAllVeg().subscribe((data) => {
      console.log(data)
      this.veg = data;

    })
  }
  btnEditClick(a:any){
    this.router.navigate(['Edit/'+a])
  }

}
