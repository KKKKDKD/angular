import { Injectable } from '@angular/core';
import { Auth } from './auth.modul';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  listOfAuth:Auth[]=[];

  public findAuth(): Auth[]{

let auth=new Auth("AMIT","TEST",new Date(),"pass");
let auth1=new Auth("bpn","TEST",new Date(),"pass");
let auth2=new Auth("bishl","TEST",new Date(),"pass");
this.listOfAuth.push(auth);
this.listOfAuth.push(auth1);
this.listOfAuth.push(auth2);
return this.listOfAuth;
  }
  public deleteAuth(auth:Auth){
    return this.listOfAuth = this.listOfAuth.filter(t=>t.uname!=auth.uname)


  }
}
