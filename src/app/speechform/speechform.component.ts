import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-speechform',
  templateUrl: './speechform.component.html',
  styleUrls: ['./speechform.component.css']
})
export class SpeechformComponent implements OnInit, AfterViewInit {

  @Input() speechdetails: any;
  speechtext: string;
  speechauthor: string;
  speechkeyword: string;
  speechdate: string;
  sharedwith: string;
  displaysharedwith: boolean = false;
  @Output() deletespeech = new EventEmitter();
  @Output() savespeech = new EventEmitter();

  constructor() { }
  myGroup: FormGroup;
  model: any = {};

  ngOnInit() {
    this.myGroup = new FormGroup({
   });

  }

  ngAfterViewInit() {

  }
  received() {
    this.model.speechtext = this.speechdetails.speechContent;
    this.model.speechauthor = this.speechdetails.author;
    this.model.speechkeyword = this.speechdetails.keywords;
    this.model.speechdate = this.speechdetails.date;
    this.model.sharedwith = this.speechdetails.sharedwith;

  }

  delete() {
    this.deletespeech.emit();
    this.model.speechtext = "";
    this.model.speechauthor = "";
    this.model.speechkeyword = "";
    this.model.speechdate = "";
    this.model.sharedwith = "";
  }

  savespeechitem() {
    let newitem = {
      "speechContent": this.model.speechtext,
      "author": this.model.speechauthor,
      "keywords": this.model.speechkeyword,
      "date": this.model.speechdate,
      "sharedwith": this.model.sharedwith
    };
    this.savespeech.emit(newitem);
  }

  sharedwithfunc() {
    if (this.displaysharedwith == true) {
      this.displaysharedwith = false;
    } else {
      this.displaysharedwith = true;
    }
  }
  closesharedwith() {
    this.displaysharedwith = false;
  }
  submitnew(){
    this.model.speechtext = "";
    this.model.speechauthor = "";
    this.model.speechkeyword = "";
    this.model.speechdate = "";
    this.model.sharedwith = "";
    
 
    console.log('new item');
  }
  searchnew(){
    this.speechtext = "";
    this.speechauthor = "";
    this.speechkeyword = "";
    this.speechdate = "";
    this.sharedwith = "";
  }

}
