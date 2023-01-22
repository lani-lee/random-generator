import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { RouterModule } from '@angular/router'
import { HomeModule } from './components/home/home.module';
import { JokeGeneratorModule } from './components/joke-generator/joke-generator.module'
import { HttpClientModule } from '@angular/common/http'

/*
  Add your modules to the imports here
  To use routing, remember to also add your module to the app-routing.module.ts imports
*/
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    HomeModule,
    JokeGeneratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
