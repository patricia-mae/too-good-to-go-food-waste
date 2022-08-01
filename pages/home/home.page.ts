import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  product: any;

  constructor() { 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ngOnInit() {
  }

}




