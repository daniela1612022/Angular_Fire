import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnDestroy {
  results: any[] = [
    {
    "name": "Juego 1",
    "value": 20
  },
  {
    "name": "Juego 2",
    "value": 25
  },
  {
    "name": "Juego 3",
    "value": 15
  },
  {
    "name":"Juego 4",
    "value":30
  }
];;

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Games';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votos';

  colorScheme = 'neons';

  //intervalo; // referencia del setInterval

  constructor() {

    // llamamos la funcion en un intervalo de tiempo para verificar
    // que este funcionando en tiempo real

    //setInterval -> Posible fuga de memoria

    //this.intervalo = setInterval (() => {

      //console.log('tick');
      //const newResults = [...this.results];

    //console.log(Math.round(Math.random()*500))
    //for(let i in newResults){
      //newResults[i].value= Math.round(Math.random()*500)}

    // Verificacion donde creamos un nuevo arreglo rompiendo la verificacion x tick
    // Confirmacion en tiempo real
    //this.results = [...newResults];
//},1500);
  }

  onSelect(event : any){
    console.log(event);
  }

  // Se va a ejecutar cuando la grafica ya no sea visible
  // Destuye el intervalo
  ngOnDestroy(): void {
    //clearInterval(this.intervalo);
  }

}
