import { ElementSchemaRegistry } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  public data:any ={
    FriendList :[]
  };
  transform(value: any, filterStr: string): any {
   
    if(filterStr ===""){
      return value;
    }else {
      this.data.FriendList = [];
      for(const user of value){
        if(user.Name.toLowerCase().includes(filterStr.toLocaleLowerCase())){
          console.log(this.data.FriendList);
           this.data.FriendList.push(user);
        }
      }
      return this.data.FriendList;
    
    } 
  }

}
