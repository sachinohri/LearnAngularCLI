import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})

export class StoriesComponent implements OnInit {
  items: number[];

  constructor() {
    this.items = Array(30);
  }

  ngOnInit() {
  }
}