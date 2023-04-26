import { Component, HostListener, OnInit } from '@angular/core';

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

  showMenu(){
    this.isShown = !this.isShown;
    const elem = document.querySelector('.menu-list') as HTMLElement;
    if(this.isShown == true){
      elem.style.display = 'block';
    }
    else{
      elem.style.display = 'none';
    }
  }

 


}
