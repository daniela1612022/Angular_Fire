import { Component, OnInit  } from '@angular/core';
//import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DocumentData } from 'firebase/firestore';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit{


  constructor( private db : Firestore){}

  ngOnInit(): void {

    const itemCollection = collection(this.db , 'goty');
    //this.db.collection('goty').valueChanges()
    //.subscribe(resp => {
    //  console.log(resp);
    //})
    };
  }
