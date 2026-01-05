use("Libros")
//Recuperar todos los libros que tienen un precio mayor a 40.
// db.libros.find({precio: {$gt : 40}})


//Recuperar todos los libros que en el campo cantidad tengan 50 o más.
// db.libros.find({cantidad:{$gte:50 }})

//Recuperar todos los libros que en el campo cantidad haya un valor distinto a 50.
// db.libros.find({cantidad:{$ne:50}})

//Recuperar todos los libros cuyo precio esté comprendido entre 20 y 45.
// db.libros.find({ precio: { $gt: 20, $lt: 45 } })

//Recuperar todos los libros que sí pertenezcan a la editorial Planeta.
db.libros.find({ editorial:{$eq:"Planeta"} })








 











// db.createCollection("libros")   
//  db.libros.insertMany([
//   {
//     "titulo": "El Señor de los Anillos",
//     "precio": 45,
//     "cantidad": 50,
//     "editorial": "Planeta"
//   },
//   {
//     "titulo": "Cien años de soledad",
//     "precio": 30,
//     "cantidad": 100,
//     "editorial": "Sudamericana"
//   },
//   {
//     "titulo": "Aprende MongoDB",
//     "precio": 55,
//     "cantidad": 10,
//     "editorial": "O'Reilly"
//   },
//   {
//     "titulo": "La Sombra del Viento",
//     "precio": 20,
//     "cantidad": 50,
//     "editorial": "Planeta"
//   },
//   {
//     "titulo": "El Principito",
//     "precio": 15,
//     "cantidad": 200,
//     "editorial": "Salamandra"
//   },
//   {
//     "titulo": "Clean Code",
//     "precio": 42,
//     "cantidad": 5,
//     "editorial": "Anaya"
//   },
//   {
//     "titulo": "Don Quijote",
//     "precio": 40,
//     "cantidad": 49,
//     "editorial": "Planeta"
//   },
//   {
//     "titulo": "Harry Potter",
//     "precio": 25,
//     "cantidad": 60,
//     "editorial": "Salamandra"
//   }
// ]);

