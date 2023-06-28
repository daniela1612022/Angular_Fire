import { Component , OnInit, booleanAttribute} from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})

export class GotyComponent implements OnInit {

  juegos : Game[] = [];

  constructor(private gameService : GameService){}

  ngOnInit(){
    //Peticion
    this.gameService.getNominados()
      .subscribe(juegos => {
      console.log(juegos);
      this.juegos = juegos;
    });
  }

  //Funcion del click del boton
  votacionJuego(juego:Game){
    //console.log(juego);
    // Revision de id e incremento de votaciones en el gameservice
    this.gameService.votacionJuegos(juego.id)
    .subscribe((resp: any ) => {
      if(resp.ok){
        Swal.fire('Gracias' , resp.mensaje , 'success' );
      }else{
        //En caso de que no ingrese un id valido
        Swal.fire('Ups , Parece que hubo un error' , resp.mensaje , 'error' );
      }
    });
  }

}

