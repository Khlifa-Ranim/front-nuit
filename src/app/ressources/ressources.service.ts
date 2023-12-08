import { Injectable } from '@angular/core';
import { Ressources } from './Ressource.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getRessource(): Observable<Ressources[]> {
    return this.http.get<Ressources[]>(`${this.apiServerUrl}/Ressources/all`)
  }


  public AddRessource(ressources: Ressources): Observable<Ressources> {
    return this.http.post<Ressources>(`${this.apiServerUrl}/Ressources/add`, ressources)
  };

  public UpdateRessource(ressources: Ressources): Observable<Ressources> {
    return this.http.put<Ressources>(`${this.apiServerUrl}/Ressources/update`, ressources)
  };

  public DeleteRessource(RessourceId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/Ressources/delete/${RessourceId}`)
  };

  public getResourceById(RessourceId: number): Observable<Ressources> {
    // You need to implement this method based on your API
    return this.http.get<Ressources>(`${this.apiServerUrl}/Ressources/find/${RessourceId}`)

  }
}
