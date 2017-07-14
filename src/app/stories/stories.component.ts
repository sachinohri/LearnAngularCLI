import { Component, OnInit } from '@angular/core';
import {BBCNews} from '../models/BBCNews';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})

export class StoriesComponent implements OnInit {
  items: number[];
  stories: BBCNews[];
  constructor() {
    this.items = Array(10);
  }

  fetchStories(): BBCNews[]{
      let BBCnews: BBCNews[]= new Array();
      for(let i=1;i<11;i++){
        let news: BBCNews = new BBCNews;
        news.author = "BBC Sports";
        news.title = "Title " + i;
        news.url = "http://typescriptlang.org"
        news.description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        BBCnews.push(news);
      }
      return BBCnews
  }
  ngOnInit(){
    this.stories = this.fetchStories();
  }
  
}