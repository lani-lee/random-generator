import { NgModule } from '@angular/core'
import { HomeComponent } from './home.component'
import { CommonModule } from '@angular/common'
/*
  To use routing, make each component its own module by adding this module.ts file
      (There's probably a better way to do this but I just copy pasta from another module file to make this one
      and then add it to the app.module.ts and app-routing.module.ts imports)
  declarations - what component(s) does this module contain?
  exports - what component(s) do you want to access from outside this module?
  imports - what component(s) do you need to use in this module? (TODO setting to auto-import while you work?)
*/
@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
})
/*
  Remember to take this module (HomeModule) and put it in app.module.ts imports (and app-routing.module.ts for routing)
*/
export class HomeModule {
}
