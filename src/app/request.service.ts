import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GraphProfil } from './models/profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  Get(token: string | undefined | null): Observable<GraphProfil>{
    const url = "https://graph.microsoft.com/v1.0/me";
    let data = this.http.get<GraphProfil>(url, { headers: new HttpHeaders({ 'Authorization': `Bearer ${token}` }), responseType: "json" });
    return data
  }
  
}
