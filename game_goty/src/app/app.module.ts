import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

//Firebase - Firestore
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
//import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreModule} from '@angular/fire/firestore';
import { enviroment } from '../enviroments/enviroment';

import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';

import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GotyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    FirestoreModule,
    //AngularFirestoreModule,
    //AngularFireModule.initializeApp(enviroment.firebase)
    provideFirebaseApp(() => initializeApp(enviroment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
