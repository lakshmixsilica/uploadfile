import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileSelectDirective } from 'ng2-file-upload';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './files/files.component';

const appRoutes: Routes=[
  {path: 'files',  component: FilesComponent},
];

@NgModule({
  declarations: [
    AppComponent,FileSelectDirective, FilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,RouterModule.forRoot(appRoutes)
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

