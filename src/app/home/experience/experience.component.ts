import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  title: string = 'Experience';
  experience: any = [
    {
      date_start: 'OCT 2018',
      date_end: 'MAY 2021',
      company: 'Metagenics, LLC',
      location: 'Aliso Viejo, CA',
      type_job: 'Remote Position',
      position: 'Sr Front end developer and UI/UX designer',
      description: 'Working remotely on Angular JS projects and improve a web app with CMS as the back office. As UI/UX designer, help the design team to create new screens for new processes into the system. We used adobe XD to create the screens and adobe illustrator to create iconography and illustrations for sorne sections.',
      tasks: [
        'Create connections with an API created from the CMS as a base',
        'Helping with design improvements for the web app',
        'Doing updates on the front end for site and web app for different countries and dev environments',
        'Participating in the development of UI on a project to cast medical results on 4K TV',
        'Helping to design team with UX',
        'Supporting the backend team with connection issues on TV screen',
        'Being part of the front-end team on the development of a web app for medical clinics using angularJS with TypeScript'
      ],
      tools: 'Visual Studio Code, Adobe XD, lllustrator, GitKraken (GIT), iTerm (SCSS, and GIT), Slack, and Catalina as Project Management.'
    },
    {
      date_start: 'JAN 2018',
      date_end: 'JUL 2019',
      company: 'Wynne Systems, LLC',
      location: 'Aliso Viejo, CA',
      type_job: 'Remote Position',
      position: 'Sr Front end developer and UI designer',
      description: 'I worked on JSP files to improve web app and fix bugs on the system',
      tasks: [
        'Creating functions on JS',
        'Creating and updating styles using SCSS',
        'lmproving UI in different views',
        'Creating layouts (UI) thinking always-on mobile-first',
        'Cleaning up code on JSP files'
      ],
      tools: 'Spring IDE, SketchApp, lllustrator, GitKraken (GIT), iTerm (SCSS, SASS, and GIT), Slack, and Catalina as Project Management.'
    },
    {
      date_start: 'OCT 2015',
      date_end: 'JAN 2018',
      company: 'Exertus Marketing, LLC',
      location: 'Carlsbad, CA',
      type_job: 'Remote Position',
      position: 'Web developer',
      description: 'As a web developer, my responsibilities are as follows:',
      tasks: [
        'Build sites from design files (illustrator, photoshop or sketch app)',
        'Develop themes for WordPress',
        'Generate templates for WordPress themes',
        'Short-codes development to simplify styling in blog articles',
        'Connection with web services (API) to work with jQuery or angularJS',
        'Creation or editing of WordPress pfugins.Development of animations with CSS (or SCSS / SASS) or jQuery',
        'Generating styles for responsive sites from the desktop version of the site',
        'Development of mini web apps for sites like a signature generator for emails with the generation of downloadable files',
        'Forms connection with Campaign Monitor, PipeDrive, and MailChimp',
        'Generation of icon fonts',
        'SVG image animation',
        'Creating functions for use in WordPress themes'
      ],
      tools: 'Atom and Sublime Text, Photoshop, lllustrator, lnDesign, SketchApp, SourceTree (GIT), iTerm (SCSS, SASS and GIT), Slack, G Suite, and Asana as Project Management.'
    },
    {
      date_start: 'JAN 2014',
      date_end: 'OCT 2015',
      company: 'Sonata Services, S.A. de C.V.',
      location: 'Tijuana, BC',
      type_job: 'In site',
      position: 'Sr Front end developer',
      description: 'l\'m proud to be former outsourcing for Creative Mob, a creative agency with location in San Diego California. In Creative Mob I worked with UI/UX and desktop and mobile layout (responsive). Was an honor for me to been part of the leaders board and we took decisions about if some project needs more elements or if other team could help to another one in the different projects in the company.',
      tasks: [
        'Build sites from design files (illustrator or photoshop)',
        'Develop themes for Wordpress',
        'Generate templates for Wordpress themes',
        'Connection with web services (API) to work with jQuer:y or angular JS',
        'Development of animations with CSS (or SCSS / SASS) or jQuery',
        'Generating styles for responsive sites from the desktop version of the site',
        'Generation of icon fonts',
        'SVG image animation',
        'Creating functions for use in Wordpress themes',
        'Control Version Management with GIT'
      ],
      tools: 'Sublime Text, Photoshop, lllustrator, SourceTree (GIT), iTerm (SCSS, SASS and GIT), Slack, G Suite and Asana as Project Management.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
