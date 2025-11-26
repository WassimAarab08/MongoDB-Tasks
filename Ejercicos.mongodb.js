use ("anime")
//1. Crea una colecci ́on nueva llamada armas (simplemente el comando de creaci ́on, sin insertar datos).
//  db.createCollection("armas")
//  db.createCollection("anime_personaje")





// //Inserta un  ́unico personaje nuevo: “Tanjiro Kamado” del anime “Demon Slayer”, con poder 4000 y campo
// //es humano: true.
 
// db.anime_personaje.insertOne({
//   nombre :"Tanjiro Kamado",
//   anime:" Demon Slayer",
//   poder:4000,
//   es_humano:true
// })

// //Inserta estos dos personajes a la vez: “Freezer” (Dragon Ball, poder 8000, humano false) y “Sasuke Uchiha”
// //(Naruto, poder 6900, humano true).

 
// db.anime_personaje.insertMany([{
//   nombre :"Freezer",
//   anime:"Dragon Ball",
//   poder:8000,
//   es_humano:false
// },

// {
//   nombre :"Sasuke Uchiha",
//   anime:"Naruto",
//   poder:6900,
//   es_humano:true
// }])


// // 4. Muestra todos los personajes de la colecci ́on para verificar los datos.

// db.anime_personaje.find({});

// // 5. Muestra solo un personaje (el primero que encuentre la base de datos).
// db.anime_personaje.findOne()

// 6. Busca todos los personajes que pertenezcan al anime “Dragon Ball”.
// db.anime_personaje.find( { anime:"Dragon Ball" } )

// 7. Busca el documento espec ́ıfico donde el nombre sea exactamente “Eren Jaeger”.
//  db.anime_personaje.find({nombre:"Eren Jaeger"})

// 8. Muestra todos los personajes, pero proyectando (visualizando) solo los campos nombre y poder (recuerda que
// el id aparecer ́a por defecto).
// db.anime_personaje.find({},{nombre:1,poder:1})


// 9. Muestra todos los personajes, visualizando nombre y anime, pero ocultando expl ́ıcitamente el id.
// db.anime_personaje.find({},{nombre:1,anime:1,_id:0})

// 10. Muestra todos los datos de los personajes, excepto el campo es humano (que debe permanecer oculto).
// db.anime_personaje.find({},{es_humano:0})

// 11. Busca los personajes del anime “Naruto” y muestra solamente su nombre, asegur ́andote de ocultar el id.
// db.anime_personaje.find({anime:"Naruto"},{nombre:1,_id:0})

// 12. Borra un  ́unico documento: aquel cuyo nombre sea “Edward Elric”.
// db.anime_personaje.deleteOne({nombre:"Edward Elric"})

// 13. Borra todos los personajes que pertenezcan al anime “Dragon Ball”.
// db.anime_personaje.deleteMany({anime:"Dragon Ball"})

// 14. Borra todos los personajes que tengan exactamente un poder de 5000.
// db.anime_personaje.deleteMany({poder:5000})

// 15. Borra todos los documentos restantes para dejar la colecci ́on vac ́ıa.
// db.anime_personaje.deleteMany({})























// db.anime_personaje.insertMany([
//   {
//     "nombre": "Saitama",
//     "anime": "One Punch Man",
//     "poder": 10000,
//     "es_humano": true
//   },
//   {
//     "nombre": "Son Goku",
//     "anime": "Dragon Ball",
//     "poder": 9000,
//     "es_humano": false
//   },
//   {
//     "nombre": "Satoru Gojo",
//     "anime": "Jujutsu Kaisen",
//     "poder": 8500,
//     "es_humano": true
//   },
//   {
//     "nombre": "Naruto Uzumaki",
//     "anime": "Naruto",
//     "poder": 7000,
//     "es_humano": true
//   },
//   {
//     "nombre": "Edward Elric",
//     "anime": "Fullmetal Alchemist",
//     "poder": 4500,
//     "es_humano": true
//   },
//   {
//     "nombre": "Meliodas",
//     "anime": "Seven Deadly Sins",
//     "poder": 8600,
//     "es_humano": false
//   },
//   {
//     "nombre": "Eren Jaeger",
//     "anime": "Attack on Titan",
//     "poder": 5000,
//     "es_humano": true
//   },
//   {
//     "nombre": "Vegeta",
//     "anime": "Dragon Ball",
//     "poder": 8800,
//     "es_humano": false
//   },
//   {
//     "nombre": "Alucard",
//     "anime": "Hellsing",
//     "poder": 8200,
//     "es_humano": false
//   }
// ]);