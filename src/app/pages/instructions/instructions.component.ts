import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  language: string = 'fr';

  constructor() { }

  ngOnInit() {
  }

  setLanguage(lang) {
    this.language = lang;
  }
}
