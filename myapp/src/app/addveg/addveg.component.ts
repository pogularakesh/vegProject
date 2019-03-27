import { Component, OnInit } from '@angular/core';
import { vegetable } from '../model/veg';
import { VegService } from '../services/veg.service';
import { Router } from '@angular/router';
import {Subscriber} from 'rxjs'

@Component({
  selector: 'app-addveg',
  templateUrl: './addveg.component.html',
  styleUrls: ['./addveg.component.css']
})
export class AddvegComponent implements OnInit {
  veg:vegetable;

  constructor(private vs:VegService,private router:Router) {
    this.veg=new vegetable()
   }
   onFileSelect(event) {

    if (event.target.files && event.target.files[0]) {
        let rdr = new FileReader();
        rdr.readAsDataURL(event.target.files[0])
        rdr.onload = (ev: any) => {
            this.veg.vimage = ev.target.result
        }
    }

    console.log(this.veg.vimage)
}
Submitclick(frm: any) {
  if (frm.valid) {
    this.veg.vimage = this.veg.vimage.replace('data:image/jpeg;base64,', '')
    this.veg.vimage = this.veg.vimage.replace('data:image/jpg;base64,', '')
    this.veg.vimage = this.veg.vimage.replace('data:image/png;base64,', '')
    this.veg.vimage = this.veg.vimage.replace('data:image/gif;base64,', '')

    alert(this.veg.vimage)
    this.veg.vid = frm.value.vid
      this.veg.vname = frm.value.vname;
      this.veg.quantity = frm.value.quantity;
      this.veg.price = frm.value.price;
      this.veg.discount = frm.value.discount;

  

    //alert(JSON.stringify(this.veg))
    
 
    this.vs.insertVeg(this.veg).subscribe((data) => {
      console.log(data);
      //alert(data.message)
      this.router.navigate(['showall'])
    });
  }
 }

  ngOnInit() {
  }

}
