import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  /*
    In the html, we put this on the button: (click)="goToPage('joke-generator')"
    So when that button is clicked, it will call this function with pageName='joke-generator'
    Then the router will navigate to the URL localhost:4200/joke-generator (since it's set up in app-routing.module.ts)
   */
  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]).then()
  }
}
