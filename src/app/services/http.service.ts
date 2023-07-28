import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
 private headers?:HttpHeaders;
  constructor(private http:HttpClient) { }
  
 getProfile(){
    const url = "https://app.smartkeeda.com/demoapi/demo/main";
    const queryParam = new HttpParams();
    const Param = queryParam.append("PageNo",2)
                            .append("Token","123")
                            .append("AppVersion",100)
                            .append("GroupId",1);

    return  this.http.post<any>(url,"",{params:Param});
 }

 getPost(pageNo:Number){
  const queryParam = new HttpParams();
  const Param = queryParam.append("PageNo",pageNo.toString())
                          .append("Token","123")
                          .append("AppVersion",100)
                          .append("GroupId",1);

  const url = "https://app.smartkeeda.com/demoapi/demo/PostData";
  return  this.http.post<any>(url,"",{params:Param});
 }

 getProfileWithImage(){
  const queryParam = new HttpParams();
  const Param = queryParam.append("UserId",1)
                          .append("Token","123")
                          .append("AppVersion",100)
                          .append("GroupId",1);
  const url = "https://app.smartkeeda.com/demoapi/demo/Getprofile";
  return this.http.post(url,"",{params:Param});
 }
}
