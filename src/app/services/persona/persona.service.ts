import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaService extends BaseService{

  private url: string = 'persona/';

  constructor(http: HttpClient) { super(http)}

  obtenerTodos(){
    return this.postServiceObservable(this.url).pipe(map(data=>data));
  }
  
  obtenerPorId(id: number){
    return this.getServiceObservable(this.url+'?id='+id).pipe(map(data=>data));
  }
}
