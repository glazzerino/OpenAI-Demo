import { NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
imports: [BrowserModule, NgModule, AppRoutingModule,]
import { AppComponent } from './app.component';
import { ParentMenuComponent } from './parent-menu/parent-menu.component';
import { TextdavinciComponent } from './textdavinci/textdavinci.component';
import { ModerationsComponent } from './moderations/moderations.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ParentMenuComponent,
    TextdavinciComponent,
    ModerationsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
