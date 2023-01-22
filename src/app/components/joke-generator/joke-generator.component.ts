import { Component, OnDestroy, OnInit } from '@angular/core'
import { DadJoke } from '../../api/dad-jokes/dad-joke'
import { DadJokesService } from '../../api/dad-jokes/dad-jokes.service'
import { Router } from '@angular/router'
import { Subject, takeUntil } from 'rxjs'

@Component({
  selector: 'app-joke-generator',
  templateUrl: './joke-generator.component.html',
  styleUrls: ['./joke-generator.component.css']
})
export class JokeGeneratorComponent implements OnInit, OnDestroy {

  destroyed$ = new Subject()

  currentJoke: DadJoke
  // show exit button after clicking refresh once
  // TODO exit button is visible before page loads, then after the page loads it's hidden and functions properly
  exitButtonVisible = false
  firstJoke = true

  /*
    These services are provided by dependency injection
    We don't need to do anything for these to work - just add it to the constructor, and you're good to go
    We can inject DadJokesService because we have labeled it with @Injectable (see dad-jokes.service.ts)
    INFO: https://angular.io/guide/dependency-injection
  */
  constructor(private dadJokesService: DadJokesService,
              private router: Router) {
  }

  /*
    This is a lifecycle hook, basically a function that runs at a certain point of the component's lifecycle
    Most useful ones are ngOnInit() and ngOnDestroy(), the rest are for weird cases
    ngOnInit() runs when the page first loads, ngOnDestroy() is run when the component is destroyed
    INFO: https://angular.io/guide/lifecycle-hooks
  */
  ngOnInit() {
    this.generateJoke()
  }

  /*
    This subscribe/destroyed stuff is important once you start using observables, but you can ignore for now
    To learn more, look up rxjs for angular
  */
  ngOnDestroy() {
    this.destroyed$.next(true)
    this.destroyed$.complete()
  }

  generateJoke() {
    this.dadJokesService.get(1).pipe(takeUntil(this.destroyed$))
      .subscribe(
      (jokes) => {
        if (jokes !== null) {
          this.currentJoke = jokes[0]
        }
      }
    )
    this.showExitButton()
    this.firstJoke = false
  }

  showExitButton() {
    if (!this.firstJoke) {
      this.exitButtonVisible = true
    }
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]).then()
  }

}
