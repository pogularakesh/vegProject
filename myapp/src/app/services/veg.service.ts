import { Injectable } from '@angular/core';
import {vegetable, register} from '../model/veg';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VegService {
  getvegDetails(i:number):Observable<any> {
    return this.hc.get(this.url, { responseType: 'json' })
  }
  updateDetails(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  vname: any;
  vimage: any;
  quantity: any;
  price: any;
  discount: any;
  
  url = "http://localhost:4500/veg"
  url1 = "http://localhost:4500/register/"
  url2 = "http://localhost:4500/cart/"
  url5="http://localhost:4500/admin"
url6="http://localhost:4500/ulogin"
url7="http://localhost:4500/update"

  constructor(private hc:HttpClient) {}
    insertVeg(vg: vegetable): Observable<any> {
      console.log(JSON.stringify(vg));
      const httpOptions = {
        headers: new HttpHeaders({ 'content-type': 'application/json' })
      }
      return this.hc.post(this.url, JSON.stringify(vg), httpOptions)
  
    }
    insertRegister(reg: register): Observable<any> {
      console.log(JSON.stringify(reg));
      const httpOptions = {
        headers: new HttpHeaders({ 'content-type': 'application/json' })
      }
      return this.hc.post(this.url1, JSON.stringify(reg), httpOptions)
    }
    GetAllVeg(): Observable<any> {
      return this.hc.get(this.url, { responseType: 'json' })
    }
    Deletevegetable(n: number): Observable<any> {
      return this.hc.delete(this.url +'/'+ n, { responseType: 'json' })
    }
    getvgDetails(b: any): Observable<any> {
      return this.hc.get(this.url +'/'+ b, { responseType: 'json' })
    }
    UpdateVeg(a:vegetable):Observable<any>{
      const httpOptions={
        headers:new HttpHeaders({'content-type':'application/json'})
      }
      //console.log(a)
      return this.hc.put(this.url+'/'+a.vid,JSON.stringify(a),httpOptions)
    }
    UpdateVeg1(a:vegetable):Observable<any>{
      const httpOptions={
        headers:new HttpHeaders({'content-type':'application/json'})
      }
      //console.log(a)
      return this.hc.put(this.url7+'/'+a.vid,JSON.stringify(a),httpOptions)
    }



    AddtoCart(j: any, i: any): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({ 'content-type': 'application/json' })
      }
      return this.hc.post(this.url2+ '/' + i + '/' + j, httpOptions)
    }
    cart(): Observable<any> {
      return this.hc.get(this.url2 + '/' + "vname", { responseType: 'json' })
    }
    cartDetails(i: number): Observable<any> {
      return this.hc.get(this.url2 + '/' + i, { responseType: 'json' })
    }
    DeleteVeg(vid: number, userid: any): Observable<any> {
      return this.hc.delete(this.url2 + '/' + vid + '/' + parseInt(userid), { responseType: 'json' })
    }
    getadminlogin(u,p):Observable<any>{
      return this.hc.get(this.url5+'/'+u+'/'+p,{responseType:'json'})
    }
    getuserlogin(u,p):Observable<any>{
      return this.hc.get(this.url6+'/'+u+'/'+p,{responseType:'json'})
    }
   }

