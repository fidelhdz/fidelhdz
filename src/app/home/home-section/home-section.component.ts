import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {

  age:string = "45";
  location:string = "Ramos Arizpe, COA MX";
  phone:string = "+52 81 1050 3399";
  email:string = "fidel.hdz@me.com";
  status:string = "Available";
  backgroundURL:string = "../../../assets/images/section-bg-1.jpg";

  constructor() { }

  ngOnInit(): void {
    
  }

}
