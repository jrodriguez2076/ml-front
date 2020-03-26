import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-sim',
  templateUrl: './text-sim.component.html',
  styleUrls: ['./text-sim.component.css']
})
export class TextSimComponent implements OnInit {
  Title: string = 'Text Similarity'

  constructor() { }

  ngOnInit(): void {
  }

}
