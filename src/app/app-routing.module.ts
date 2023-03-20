import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModerationsComponent } from './moderations/moderations.component';
import { ParentMenuComponent } from './parent-menu/parent-menu.component';
import { TextdavinciComponent } from './textdavinci/textdavinci.component';
import { DalleComponentComponent } from './dalle-component/dalle-component.component';
import { PoemsComponent } from './poems/poems.component';
const routes: Routes = [
  { path: 'text', component: TextdavinciComponent },
  { path: 'moderations', component: ModerationsComponent },
  { path: 'dalle-component', component: DalleComponentComponent },
  { path: 'poems', component: PoemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
