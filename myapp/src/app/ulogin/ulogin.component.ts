import { Component, OnInit } from '@angular/core';
import { register } from '../model/veg';
//import { PlayersService } from '../services/players.service';
import { Router } from '@angular/router';
import { VegService } from '../services/veg.service';

@Component({
  selector: 'app-ulogin',
  templateUrl: './ulogin.component.html',
  styleUrls: ['./ulogin.component.css']
})
export class UloginComponent implements OnInit {
ul:register;
  constructor(private vs:VegService,private router :Router) {this.ul=new register() }


  btnfunction(userid,password){
    let u=userid.value;
    let p=password.value;
    alert(u+"/"+p)
    this.vs.getuserlogin(u,p).subscribe((data)=>{
    if(data.length>0){
      localStorage.setItem("userid",u)
      this.router.navigate(['home'])
      alert('valid user')
    } 
    else
    {
      alert("invalid user")
    }
    })
  
  }
  ngOnInit() {
  }

}
