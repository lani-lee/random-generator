import { HttpHeaders } from '@angular/common/http'

export class CommonHeaders {
  /*
    Headers should be HttpHeader objects defined with key value pairs
    The API docs tell me this:
      X-Api-Key (required) - API Key associated with your account
    So key = 'X-Api-Key' and value is my key

    This is a static variable bc we only need one for the entire application, it can be reused for any call to this API

    You need to make an account on https://api-ninjas.com/ to get an api key
    This is my key, pls don't get me banned lmao
  */
  static headers: HttpHeaders = new HttpHeaders({
    'X-Api-Key': "ZciMFCLb63Cf20Faxwp/kA==CabRPlbOS5FVKJz6"
  })

}
