import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-higlights',
  templateUrl: './higlights.component.html',
  styleUrls: ['./higlights.component.scss']
})
export class HiglightsComponent implements OnInit {

  backgroundURL:string = "../../../assets/images/section-bg-1.jpg";


  constructor() { }

  ngOnInit(): void {
  }

}
