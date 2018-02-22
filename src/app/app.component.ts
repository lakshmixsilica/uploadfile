import { Component, OnInit } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Component({
    selector: 'app-root',
    
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  filesToUpload: Array<File> = [];
  
 address ={documents:''}
 
  constructor(private http: Http) {}

  ngOnInit() {}


  upload($event) {
   event.preventDefault();
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);
    }
    console.log('form data variable :   '+ formData.toString());
     formData.append("uploads[]", files[0], files[0]['name']);
    this.address.documents = files.toString();

        this.http.post('http://localhost:8000/upload', formData)
        .map(files => files.json())
        .subscribe(files => console.log('files', files))
}

fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
}

}