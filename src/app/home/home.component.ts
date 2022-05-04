import { Component, OnInit } from '@angular/core';
import { HomeStore } from './home.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeStore],
})
export class HomeComponent implements OnInit {
  constructor(private homeStore: HomeStore) {}

  ngOnInit() {
    this.homeStore.loadUser();
    this.homeStore.user$.subscribe(console.log);
  }
}
