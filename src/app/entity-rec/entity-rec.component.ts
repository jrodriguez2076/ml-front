import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity-rec',
  templateUrl: './entity-rec.component.html',
  styleUrls: ['./entity-rec.component.css']
})
export class EntityRecComponent implements OnInit {
  Title: string = 'Entity recognition';

  constructor() { }

  ngOnInit(): void {
  }

}
