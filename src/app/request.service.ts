import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GraphProfil } from './models/profile';
import { Observable, map } from 'rxjs';

interface GraphProfilResponse {
  '@odata.context': string;
  businessPhones: any[];
  displayName: string;
  givenName: string;
  jobTitle: string;
  mail: string;
  mobilePhone: null;
  officeLocation: string;
  preferredLanguage: any;
  surname: string | undefined;
  userPrincipalName: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  Get(token: string | undefined | null): Observable<GraphProfil>{
    const url = "https://graph.microsoft.com/v1.0/me";
    let request = this.http.get<GraphProfilResponse>(url, { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }), responseType: "json" })
      .pipe(
        map((response) => {
          return new GraphProfil(
            response['@odata.context'],
            response.businessPhones,
            response.displayName,
            response.givenName,
            response.jobTitle,
            response.mail,
            response.mobilePhone,
            response.officeLocation,
            response.preferredLanguage,
            response.surname,
            response.userPrincipalName,
            response.id
          )
      }));
    return request;
  }
  GetImage(token: string | undefined | null):string{
    const url = "https://graph.microsoft.com/v1.0/me/photo/$value";
    let request = this.http.get(url, { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }), responseType: "json" })
      .subscribe(res => {
        console.log(res);
        return res
      })
    return 'lol'
  }
  
}
