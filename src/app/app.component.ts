import {
  Component,
  HostListener,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isShown = false;
  ngOnInit(): void {

  }
  title = 'portfolio';
  projectList = [{
      id: 1,
      name: 'User management',
      description: 'Web application to demonstrate basic Authentication and CRUD functions',
      techStack: ['Angular', 'Springboot', 'Java', 'Hibernate', 'MySQL'],
      deployment: ['Docker', 'Heroku'],
      status: 'Work in progress',
      link: 'http://www.google.com',
      enabled: false,
      demoVideo: 'https://www.youtube.com/watch?v=n6fwyGVi5Go'
    },
    {
      id: 2,
      name: 'Payslip generator',
      description: 'Web application to export payslip',
      techStack: ['Angular', 'Node.js', 'Express', 'MySQL'],
      deployment: ['Heroku'],
      status: 'Work in progress',
      link: 'http://www.google.com',
      enabled: false,
      demoVideo: 'http://youtube.com'
    },
    {
      id: 3,
      name: 'Shopping website',
      description: 'Shopping Website',
      techStack: ['Angular', 'Node.js', 'Express', 'Hibernate', 'MySQL'],
      deployment: ['Docker', 'Heroku'],
      status: 'Work in progress',
      link: 'http://www.google.com',
      enabled: false,
      demoVideo: 'http://youtube.com'
    },
    {
      id: 3,
      name: 'E-commerce Merchant Portal',
      description: 'E-commerce merchant portal to manage sales and allows merchants to perform basic e-commerce operations',
      techStack: ['React', 'Node.js', 'Express', 'Hibernate', 'Postgres'],
      deployment: ['Docker', 'Heroku'],
      status: 'Work in progress',
      link: 'http://www.google.com',
      enabled: false,
    },
    {
      id: 3,
      name: 'E-commerce Shopping App',
      description: 'E-commerce app',
      techStack: ['Flutter', 'ASP.Net', 'MySQL'],
      deployment: ['App Store', 'Playstore', 'Huawei Store'],
      status: 'Work in progress',
      link: 'http://www.google.com',
      enabled: false,
      demoVideo: 'http://youtube.com'
    }
  ]

  showMenu() {
    this.isShown = !this.isShown;
    const elem = document.querySelector('.menu-list') as HTMLElement;
    if (this.isShown == true) {
      elem.style.display = 'block';
    } else {
      elem.style.display = 'flex';
    }
  }

}
