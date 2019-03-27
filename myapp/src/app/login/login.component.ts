import { Component, OnInit } from '@angular/core';
//import { VegService } from '../services/veg.service'
import { Router } from '@angular/router';
import { admin } from '../model/veg';
import { VegService } from '../services/veg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

reg:admin
  constructor(private vs:VegService, private router: Router) { this.reg=new admin()}
  btnfunction(aid,apwd){
    let u=aid.value;
    let p=apwd.value;
    alert(u+"/"+p)
    this.vs.getadminlogin(u,p).subscribe((data)=>{
    if(data.length>0){
      localStorage.setItem("aid",u)
      this.router.navigate(['showall'])
      alert('valid user')
    } 
    else
    {
      alert("invalid user")
    }
    })
  
  }
  
//   btnclick(userid:any, password:any) {
//     this.lg.GetUserByUidandPass(userid.value,password.value).subscribe((data)=>{
//       console.log(data)
  

    
//     if (data.length == 1) {
//       alert('Logging In...')
//       localStorage.setItem('uname', userid.value)
//        localStorage.setItem('userid', data[0].uid)
//       this.router.navigate(['home'])
//     }
//     else
//       alert('User Not available')
//   })
// }

ngOnInit() {
}
}
   


