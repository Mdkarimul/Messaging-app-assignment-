import { Component,OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
public chatList:any; 
public inputValue:string = '';
  constructor(private httpService:HttpService){

  }
  ngOnInit(): void {
    this.httpService.getConversation().subscribe((data)=>{
      this.chatList = data;
    })
  }

  setInput(inputText:string){
    this.inputValue = inputText;
  }

  


}
