import { Component } from '@angular/core';

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
  showtable:boolean=false;
  hidetable:boolean=true;
  public welcome():void{
    this.msg = "your file is lood seccessfully looded"
  }
  public clear(): void{
    this.msg =""
     
  }
  public showdata(uname:string,password:string): void{
    this.enterValue=uname;
    this.enterValue=password;
  }

  public authenticate(uname:string,password:string): void{
    if (uname=="amir"&& password=="test") {
      this.authMsg='welcome'+" "+uname;
       }else{
        this.authMsg="pls try again";
       }
  }

  public showhide(): void{
    this.showtable=!this.showtable;
    this.hidetable=!this.hidetable;

  }
}
