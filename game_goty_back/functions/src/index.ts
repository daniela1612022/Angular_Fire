import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp ({
    credential: admin.credential.cert(serviceAccount)    
});

// Referencia base de datos Firestore
const db = admin.firestore();

export const helloWorld = functions.https.onRequest((request , response) => {
    response.json({
        mensaje :'Hola Mundo desde Funciones de Firebase !!!!'
    });
});


export const getGame = functions.https.onRequest(async(request , response) => {
    //const nombre = request.query.nombre || 'Sin nombre';
    //response.json({
    //    nombre
    //});

    // Referencia de coleccion a los juegos
    const gameRef = db.collection('goty');
    //snapshot de las colecciones
    const docsSnap = await gameRef.get();
    // Obtenemos la informacion de cada elemento en la coleccion
    const games = docsSnap.docs.map(doc => doc.data());
    response.json(games);
});


// Express para actualizar las peticiones en las colecciones
const app = express();
 // Cors para que mi aplicacion acepte peticiones de otros dominios
app.use(cors({origin : true}));

app.get('/goty',async(req , res) => {
    // Referencia de coleccion a los juegos
    const gameRef = db.collection('goty');
    //snapshot de las colecciones - promesa 
    const docsSnap = await gameRef.get();
    // Obtenemos la informacion de cada elemento en la coleccion
    const games = docsSnap.docs.map(doc => doc.data());
    res.json(games);
});

// Peticion postman para actualizar los cambios en los votos
app.post('/goty/:id',async(req , res) => {

    //Extraemos el id del post con params
    const id = req.params.id;
    const gameGotyRef = db.collection('goty').doc(id);
    const gameSnap = await gameGotyRef.get();

    if(!gameSnap.exists){
        res.status(404).json({
            ok: false,
            mensaje:'No existe un juego con ese ID : ' + id
        });
    }else{
        //res.json('Juego Existente');
        // Referencia al objeto con actualizacion de promesa
        const before = gameSnap.data() || {votos : 0};
        await gameGotyRef.update({
            votos : before.votos+1
        });

        res.json({
            ok:true,
            mensaje : `Gracias por tu voto a ${before.name}`
        });

    }
});


// Despliegue en firebase 
export const api = functions.https.onRequest(app);