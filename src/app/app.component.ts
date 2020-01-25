import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { speeches } from './speeches'
import { SpeechformComponent } from './speechform/speechform.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(SpeechformComponent, { static: true }) speechformRef: SpeechformComponent;

  title = 'Speech System';
  myspeeches: any;
  myspeechesdummy: any;
  speechtext: string;
  speechauthor: string;
  speechkeyword: string;
  speechdate: string;
  activeId: string;
  readytoadd: boolean = false;
  displaysearchbox: boolean = false;
  searchtext: string;
  sharedwith: string;
  displaysharedwith: boolean = false;
  speechdetails: any;
  searchboxtext: string = "";

  constructor() {

    this.myspeechesdummy = speeches.slice(0);
  }
  ngOnInit() {
    this.myspeeches = speeches;
  }
  fillContent(idno) {
    var val = this.myspeeches.find(function (item) { return item.speechId == idno });
    this.speechtext = val.speechContent;
    this.speechauthor = val.author;
    this.speechkeyword = val.keywords;
    this.speechdate = val.date;
    this.sharedwith = val.sharedwith;
    this.activeId = val.speechId;
    this.readytoadd = false;

    let edittem = {
      "speechContent": val.speechContent,
      "author": val.author,
      "keywords": val.keywords,
      "date": val.date,
      "sharedwith": val.sharedwith
    };
    this.speechdetails = edittem;
    setTimeout(() => { this.speechformRef.received() }, 1);
    console.log('activeId='+this.activeId);
  }

  savespeech(data) {
    
    
    if (this.activeId) {
      var index = -1;
      let idno = this.activeId;
      var indexno = this.myspeeches.find(function (item, i) {
        if (idno == item.speechId) {
          index = i;
          return i;
        }
      });

      //console.log(index);
      this.myspeeches[index]["speechContent"] = data.speechContent;
      this.myspeeches[index]["author"] = data.author;
      this.myspeeches[index]["keywords"] = data.keywords;
      this.myspeeches[index]["date"] = data.date;
      this.myspeeches[index]["sharedwith"] = data.sharedwith;

    } else if (this.readytoadd) {
      let len = this.myspeeches.length;
      let maxno = this.myspeeches[0]["speechId"];

      for (var key in this.myspeeches) {
        if (maxno < this.myspeeches[key]["speechId"]) {
          maxno = this.myspeeches[key]["speechId"]
        }
      }
      console.log('max='+maxno);
      let newitem = {
        "speechId": maxno + 1,
        "speechContent": data.speechContent,
        "author": data.author,
        "keywords": data.keywords,
        "date": data.date,
        "sharedwith": data.sharedwith
      };
      this.myspeeches.push(newitem);
      this.myspeechesdummy = this.myspeeches.slice(0);
    } else {
      alert("Click the 'Submit a new Speech' first button'");
    }
  }
  submitnew() {
    this.activeId = "";
    this.readytoadd = true;
    setTimeout(() => { this.speechformRef.submitnew() }, 1);
  }
  removeitem() {
    if (this.activeId) {
      var index = -1;
      let idno = this.activeId;
      var indexno = this.myspeeches.find(function (item, i) {
        if (idno == item.speechId) {
          index = i;
          return i;
        }
      });
      this.myspeeches.splice(index, 1);
      this.activeId = "";
      this.myspeechesdummy = this.myspeeches.slice(0);

    }
  }
  allspeech() {
    this.searchtext = "";
    this.myspeeches = this.myspeechesdummy;
    this.searchnow('');
    
  }
  searchall() {
    this.displaysearchbox = true;
    this.speechformRef.searchnew();
  }
  searchnow(searchtext) {
    this.myspeeches = this.myspeechesdummy.slice(0);
    this.searchboxtext = searchtext;
    this.displaysearchbox = false;
    this.searchtext = "";
  }
  testitem(item) {
    if (this.searchboxtext) {
      if (item.author.includes(this.searchboxtext) || item.speechContent.includes(this.searchboxtext) || item.keywords.includes(this.searchboxtext)) {
        return true;
      } else { return false }
    } else { return true}
  }

}