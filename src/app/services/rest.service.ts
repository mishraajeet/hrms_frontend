import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {  }
 
  get(endPointg: any, params?: any, optn?: any) {
    const p = [];
    let newParam: any;
    if (params) {
      // tslint:disable-next-line: forin
      for (const  k in params) {
        const str = k + '=' + params[k];
        p.push(str);
      }
      newParam = p.join('&');
    }
    return this.http.get(this.baseUrl + endPointg + '?' + newParam, optn );
  }

  post(endpoint: any,data: any){
    return this.http.post(this.baseUrl + endpoint,data);
  }

  delete(endPointg: string, params?: any){
    const p = [];
    let newParam: any;
    if (params) {
      for (const  k in params) {
        const str = k + '=' + params[k];
        p.push(str);
      }
      newParam = p.join('&');
    }
    return this.http.delete<any>(this.baseUrl + endPointg + '?' + newParam);
  }

  put(endPointg: string, params?: any, optn?: any){
    const p = [];
    let newParam: any;
    if (params) {
      // tslint:disable-next-line: forin
      for (const  k in params) {
        const str = k + '=' + params[k];
        p.push(str);
      }
      newParam = p.join('&');
    }
    return this.http.put<any>(this.baseUrl + endPointg + '?' + newParam, optn);
  }
}
