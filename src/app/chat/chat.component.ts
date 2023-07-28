import { Component,OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
public chatList:any; 
  constructor(private httpService:HttpService){

  }
  ngOnInit(): void {
    this.httpService.getConversation().subscribe((data)=>{
      console.log(data);
      this.chatList = data;
    })
  }

  


}
