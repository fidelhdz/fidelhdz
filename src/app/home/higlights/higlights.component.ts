import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-higlights',
  templateUrl: './higlights.component.html',
  styleUrls: ['./higlights.component.scss']
})
export class HiglightsComponent implements OnInit {

  backgroundURL:string = "https://picsum.photos/id/495/1920/1080";


  constructor() { }

  ngOnInit(): void {
  }

}
