import { Component, OnInit  } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import { Firestore, collection , onSnapshot } from '@angular/fire/firestore';
import { Game } from 'src/app/interfaces/interfaces';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit{
  juegos: any[] = [];

  constructor( private db : AngularFirestore ){}

  ngOnInit(): void {

    this.db.collection('goty').valueChanges()
    // Transformar la informacion del arreglo
    // Con desestructuracion tomamos los datos necesarios para trabajar la grafica
    .pipe(
      map((resp : any[])=> resp.map(({name,votos})=>({name,value:votos})))
    )
    .subscribe(juegos => {
      //console.log(juegos);
      // Se recibe el objeto y se le asigna a la propiedad
      this.juegos = juegos;
    })
    };
  }
