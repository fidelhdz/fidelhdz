import { rendererTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  title: string = 'Skills';

  aria:any = [
    {
      ariaW: 92,
      item: 'CSS3',
      color: '#bd75ff'
    },
    {
      ariaW: 95,
      item: 'HTML5',
      color: '#E0457F'
    },
    {
      ariaW: 75,
      item: 'Angular',
      color: '#B6DF82'
    },
    {
      ariaW: 80,
      item: 'JS',
      color: '#B6DF82'
    },
    {
      ariaW: 70,
      item: 'TypeScript',
      color: '#B6DF82'
    },
    {
      ariaW: 50,
      item: 'ReactJS',
      color: '#B6DF82'
    },
    {
      ariaW: 70,
      item: 'PHP',
      color: '#F38062'
    },
    {
      ariaW: 80,
      item: 'WordPress',
      color: '#F38062'
    },
    {
      ariaW: 90,
      item: 'Web Design',
      color: '#A6EBE7'
    },
    {
      ariaW: 95,
      item: 'Branding',
      color: '#A6EBE7'
    },
    {
      ariaW: 85,
      item: 'Illustration',
      color: '#A6EBE7'
    },
    
  ];
  ariaWidth01:string = "90";

  constructor() { }

  ngOnInit(): void {
    
  }

}
