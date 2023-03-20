import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentMenuComponent } from './parent-menu/parent-menu.component';
import { TextdavinciComponent } from './textdavinci/textdavinci.component';
import { ModerationsComponent } from './moderations/moderations.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DalleComponentComponent } from './dalle-component/dalle-component.component';
import { PoemsComponent } from './poems/poems.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentMenuComponent,
    TextdavinciComponent,
    ModerationsComponent,
    DalleComponentComponent,
    PoemsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
