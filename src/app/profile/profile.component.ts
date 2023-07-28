import { Component,OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profileData:any;
     constructor(private http: HttpService){

     }
     ngOnInit(): void {  
      this.http.getProfileWithImage().subscribe((data:any)=>{
        console.log(data);
     this.profileData = data;
      })
     }
}
