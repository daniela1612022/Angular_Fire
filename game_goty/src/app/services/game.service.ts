import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs'; // Permite retornar observables
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class GameService {

  private juegos : Game[] = [];
  // Injectamos el servicio de http para la importacion
  constructor( private http : HttpClient) { }

  // Peticion que retorna el arreglo de juegos en postman
  getNominados(){
    // Revision en caso de que no haya juegos
    if(this.juegos.length > 0){
      //No hay juegos
      console.log('Desde cache');
      return of(this.juegos);
    }else{
      console.log('Desde Internet');
      // Regresa un arreglo (juegos)
      return this.http.get<Game[]>(`${enviroment.url}/api/goty`)
          .pipe(
            tap(juegos => this.juegos = juegos)
            );
  }
  }

  // Peticion post para insertar en el boton de votaciones
  votacionJuegos(id:string){
    return this.http.post(`${enviroment.url}/api/goty/${id}`,{})
    .pipe(
      //Retornar el error en la peticon
      catchError(err => {
      //Interseccion del errror
      //console.log('error en la peticion');
      //console.log(err)
      return of( err.error);
       // Observable con arreglo de error en id
      })
    )
  }

}
