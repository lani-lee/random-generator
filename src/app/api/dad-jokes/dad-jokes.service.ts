import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { DadJoke } from './dad-joke'
import { CommonHeaders } from '../common-headers.service'
import { Observable } from 'rxjs'

/*
  Adding this @Injectable annotation allows us to inject and use this service in our components
    (see joke-generator.component.ts)
*/
@Injectable({
  providedIn: 'root'
})
export class DadJokesService {
  readonly path = 'https://api.api-ninjas.com/v1/dadjokes'

  constructor(private readonly http: HttpClient) {
  }

  /*
    Returns an array of objects (see dad-joke.ts for example response)
    The response is automatically mapped to DadJoke objects using the matching field names

    The URL is constructed using a template string: `${this.path}?limit=${quantity}`
    Made using backticks (`string`), NOT single quotes ('string')
    In a template string, the variables defined by ${x} and will be replaced with the value of variable x
    So below if we input a quantity of 2, then the URL becomes https://api.api-ninjas.com/v1/dadjokes?limit=2
    INFO: https://angular-training-guide.rangle.io/features/es6/template_strings

    You can also specify extra options - here we need an API key provided in our header
    See CommonHeaders for header info
  */
  get(quantity: number): Observable<DadJoke[]> {
    return this.http.get<DadJoke[]>(`${this.path}?limit=${quantity}`, {
      headers: CommonHeaders.headers
    })
  }

  // TODO examples of post/put/delete

}
