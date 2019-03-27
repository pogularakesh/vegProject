import { Component } from '@angular/core';
import {Observable,of} from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  lgstatus:Observable<any>
adstatus:Observable<any>
    constructor(private router:Router,) {
    }

    checkMyadminStore(): Observable<any>{
        return of(localStorage.getItem('aid'))
    }
    checkMyuserStore(): Observable<any>{
        return of(localStorage.getItem('userid'))
    }
      LogOutClick(){
        localStorage.removeItem('userid')
        localStorage.removeItem('aid')

        this.router.navigate(['ulogin'])
    }
    ngDoCheck(){
        this.checkMyadminStore().subscribe((data)=>{this.adstatus= data})
        this.checkMyuserStore().subscribe((data)=>{this.lgstatus= data})

    } 
}
