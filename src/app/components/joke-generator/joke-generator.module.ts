import { NgModule } from '@angular/core'
import { JokeGeneratorComponent } from './joke-generator.component'
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [
    JokeGeneratorComponent
  ],
  exports: [
    JokeGeneratorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JokeGeneratorModule {
}
