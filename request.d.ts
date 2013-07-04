// Type definitions for Node.js Request
// Project: https://github.com/mikeal/request
// Definitions by: Mark Rendle <http://github.com/markrendle>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Request {
  interface IRequestOptions {
    uri?: string;
    qs?: any;
    method?: string;
    headers?: any;
    body?: string;
    json?: any;
    followRedirect?: bool;
    followAllRedirects?: bool;
    maxRedirects?: number;
    form?: any;
    encoding?: string;
    timeout?: number;
    strictSSL?: bool;
    jar?: bool;
  }

  interface IResult {
    pipe(to: any): IResult;
  }

  interface IRequest {
    (options: IRequestOptions, callback?: Function): IResult;
    (url: string, callback?: Function): IResult;
    get(options: IRequestOptions, callback?: Function): IResult;
    get(url: string, callback?: Function): IResult;
    put(options: IRequestOptions, callback?: Function): IResult;
    put(url: string, callback?: Function): IResult;
    post(options: IRequestOptions, callback?: Function): IResult;
    post(url: string, options: IRequestOptions, callback?: Function): IResult;
    del(options: IRequestOptions, callback?: Function): IResult;
    del(url: string, callback?: Function): IResult;
    patch(options: IRequestOptions, callback?: Function): IResult;
    patch(url: string, callback?: Function): IResult;
    head(options: IRequestOptions, callback?: Function): IResult;
    head(url: string, callback?: Function): IResult;
    defaults(options: IRequestOptions): IRequest;
  }
}
