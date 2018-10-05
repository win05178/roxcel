import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('login') login: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log(this.login)
  }

}
