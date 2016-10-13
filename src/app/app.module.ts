import { NgModule } from '@angular/core';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
imports: [BrowserModule],
declarations: [App],
bootstrap: [App]
})
export class AppModule{
} 
