import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    component:FeedComponent,
    path:""
  },
  {
    component:ProfileComponent,
    path:"profile"
  },
  {
    component:ChatComponent,
    path:"conversation"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
