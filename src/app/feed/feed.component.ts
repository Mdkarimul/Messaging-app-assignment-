import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  public profileData:any;
  public postData:any;
  public pageNo:number =1;
  constructor (private httpService: HttpService){
  
  }

  ngOnInit(): void {
    alert("init");
   this.getData();
   this.getPost(this.pageNo);
  }

  getData():void{
    this.httpService.getProfile().subscribe((data:any)=>{
    this.profileData = data;
    console.log(this.profileData);
    });
  }

  getPost(pageNo:number):void{
    this.httpService.getPost(pageNo).subscribe((data:any)=>{
    this.postData = data;
    console.log(this.postData);
    }); 
}

next():void{
this.pageNo >= 4 ? this.pageNo=1 : this.pageNo = this.pageNo+1;
this.getPost(this.pageNo);

}
prev():void{
if(this.pageNo >1){
  this.pageNo--;
  alert(this.pageNo);
  this.getPost(this.pageNo);
}
}

actualPage(page:number){
   this.pageNo = page;
   this.getPost(this.pageNo);
}

}
