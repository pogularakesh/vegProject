import { Component, OnInit } from '@angular/core';
import { VegService } from '../services/veg.service';
import { Router, ActivatedRoute } from '@angular/router';
import {vegetable} from '../model/veg';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  veg:vegetable;
  img: Boolean = false;

  constructor(private vs:VegService,private router:Router,private arc:ActivatedRoute) {
    this.veg=new vegetable();
   }

   onFileSelect(event) {
    this.img = true
    if (event.target.files && event.target.files[0]) {
        let rdr = new FileReader();
        rdr.readAsDataURL(event.target.files[0])
        rdr.onload = (ev: any) => {
            this.veg.vimage = ev.target.result
        }
    }

    console.log(this.veg.vimage)
}
   Submitclick(){
    if (this.img == true) {
     
    this.veg.vimage = this.veg.vimage.replace('data:image/jpeg;base64,', '')
    this.veg.vimage = this.veg.vimage.replace('data:image/jpg;base64,', '')
    this.veg.vimage = this.veg.vimage.replace('data:image/png;base64,', '')
    this.veg.vimage = this.veg.vimage.replace('data:image/gif;base64,', '')

    alert(this.veg.vimage)
  //  alert(" aswexd")
    this.vs.UpdateVeg(this.veg).subscribe((data)=>{
     console.log(data);
    //  alert('Updated....')  
    })
    this.router.navigate(['showall'])
    }
    else{
      this.vs.UpdateVeg1(this.veg).subscribe((data)=>{
        console.log(data);
    })
    this.router.navigate(['showall'])
  }
   }
  ngOnInit() {
    let i = this.arc.snapshot.params.id;
    alert(i)
    this.vs.getvgDetails(i).subscribe((data) => {
      this.veg.vid = data[0].vid;
      this.veg.vname = data[0].vname;
      // this.veg.vimage=data[0].vimage
      this.veg.quantity = data[0].quantity;
      this.veg.price = data[0].price;
      this.veg.discount = data[0].discount;
    
    
      console.log(data);
  
      })
  }

}
