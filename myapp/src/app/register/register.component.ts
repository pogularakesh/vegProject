import { Component, OnInit } from '@angular/core';
//import { PlayersService } from '../services/players.service'
import { register } from '../model/veg';
import { Subscriber } from 'rxjs';
import { Router } from '@angular/router';
import { VegService } from '../services/veg.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  reg: any
  constructor(private vs: VegService,private router:Router) {
    this.reg = new register();
    // this.router.navigate(['login'])
  }

  ngOnInit() {
  }
  btnclick(frm: any) {
    if(frm.valid){
      this.reg.userid=frm.value.userid;
      this.reg.password=frm.value.password;

    
      this.vs.insertRegister(this.reg).subscribe((data) => {
        console.log(data);
        alert('inserted successfully.....');
        this.router.navigate(['login'])
      });
    }
    else{
      alert('please enter valid credentials')
    }
    }

  }
