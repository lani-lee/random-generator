import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { HomeModule } from './components/home/home.module'
import { JokeGeneratorComponent } from './components/joke-generator/joke-generator.component'
import { JokeGeneratorModule } from './components/joke-generator/joke-generator.module'

/*
  Routes are how we navigate between pages using the URL, it essentially swaps the components based on the URL
  Component will show up wherever you put <router-outlet> (see app.component.html)
  Follow the below structure for adding new routes
    (ex. joke-generator will match to localhost:4200/joke-generator and display the JokeGeneratorComponent)
  Use ** for wildcard
  DO NOT start path with a backslash
  If your path matches multiple routes, it will use the first one it finds (from top to bottom)
  INFO: https://angular.io/tutorial/tour-of-heroes/toh-pt5#routes
*/
const routes: Routes = [
  {
    path: 'joke-generator',
    component: JokeGeneratorComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
]
/*
  Remember to include the modules from your route in this imports and the app.module.ts imports
*/
@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    HomeModule,
    JokeGeneratorModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {}
