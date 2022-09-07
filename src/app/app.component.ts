import { Component, OnInit } from '@angular/core';


import { Auth } from './auth.modul';
//import { AuthServis } from "./services/auth.service";
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'demo2';
  msg: string ='';
  enterValue=" ";
  authMsg="";
  uname="";
  pass="";
  showtable:boolean=false;
  //hidetable:boolean=true;
  showHistoryBtn:string="showhistory"
  time:Date=new Date();
  status:string="";

  //note if listofAuth is modifire it will not be reflected in service layer
listOfAuth:Auth[]=[];  

//construct injection
public constructor(private authService : AuthService){
}

ngOnInit():void{
  this.listOfAuth=this.authService.findAuth();
}

deleteAuth(auth: Auth){
  this.listOfAuth=this.authService.deleteAuth(auth)
}

  public welcome():void{
    this.msg = "your file is lood seccessfully looded"
  }
  public clear(): void{
    this.msg =""
     
  }
  public showdata(uname:string,pass:string): void{
    this.enterValue=uname;
    this.enterValue=pass;
    
    
  }


  public authenticate(uname:string,pass:string): void{
    if (uname=="amir"&& pass=="test") {
      this.authMsg='welcome'+" "+uname;
      let auth=new Auth(this.uname,this.pass,new Date(),"success");
   this.listOfAuth.push(auth);
       }else{
        this.authMsg="pls try again";
      let auth= new Auth(this.uname,this.pass,new Date(),"success");
       }
  }

  public showhide(): void{
    if (this.showHistoryBtn=='showHistory') {
      this.showtable=!this.showtable;
      this.showHistoryBtn="HideHistory";
    } else {
      this.showtable=!this.showtable;
      this.showHistoryBtn='showHistory';
    }
   // this.showtable=!this.showtable;
  //  this.hidetable=!this.hidetable;

  }
}
