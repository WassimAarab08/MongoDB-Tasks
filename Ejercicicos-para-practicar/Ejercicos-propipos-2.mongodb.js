use("Biblioteca-2")


// Búsqueda por categoría: Encuentra todos los documentos donde el campo "tipo" sea "Libro". Debes realizar una consulta de igualdad simple.
db.rb.find({tipo:"Libro"})

// Rango numérico: Busca los recursos que tengan un campo "paginas" con un valor inferior a 150. Se aplica sobre el campo "paginas".
db.rb.find({paginas:{$lt:150}})
// Contención en arrays: Localiza todos los documentos que incluyan "Aventura" o "Ciencia" dentro del campo "generos".
db.rb.find({generos:{$in:["Aventura","Ciencia"]}})
// Consulta lógica AND: Busca documentos donde el campo "tipo" sea "Libro" y además el campo "prestamos" sea superior a 100.
db.rb.find({tipo:"Libro",prestamos:{$gt:100}})
// Ordenación y límites: Obtén los 2 recursos con más "prestamos" en la biblioteca, ordenados de forma descendente por dicho campo.

db.rb.find({}).sort({prestamos:-1}).limit(2)
// Paginación: Ordena todos los documentos por el campo "titulo" alfabéticamente, salta el primer resultado y muestra los 2 siguientes.

db.rb.find({}).sort({titulo:1}).skip(1).limit(2)

// Actualización de campo: Cambia el estado del recurso "Capa y Espada". Debes establecer el campo "estado" a "Disponible" utilizando el operador adecuado.

// db.rb.updateOne({titulo:"Capa y Espada"},{$set:{estado:"Disponible"}})

// Añadir a un array: El libro "El nombre del viento" ha sido traducido. Añade el valor "Frances" al campo "idiomas" (que es un array).

// db.rb.updateOne({titulo:"El nombre del viento"},{$push:{idiomas:"Frances"}})

// Incremento atómico: El recurso "Atomic Habits" ha tenido un nuevo préstamo. Incrementa el valor del campo "prestamos" en 1.

// db.rb.updateOne({titulo:"Atomic Habits"},{$inc:{prestamos:1}})



// Eliminación: El recurso "National Geographic - Enero" ya no está en el catálogo. Elimina su documento de la base de datos usando su "titulo".

// db.rb.deleteOne({titulo:"National Geographic - Enero"})



// Existencia de campos: Busca únicamente los documentos que posean el campo "ediciones", sin importar su contenido. Se aplica sobre el campo "ediciones".

db.rb.find({ediciones:{$exists:true}})

// Rango de fechas: Encuentra los recursos que fueron publicados entre los años 2000 y 2015, ambos inclusive, actuando sobre el campo "año_publicacion".

db.rb.find({año_publicacion:{$gte:2000,$lte:2015}})

// Negación lógica: Queremos ver contenido que no sean libros. Busca todos los documentos donde el campo "tipo" NO sea "Libro".

db.rb.find({tipo:{$ne:"Libro"}})

// Operador OR: Localiza los documentos cuyo campo "tipo" sea "Revista" o cuyo campo "tipo" sea "Audiobook".

db.rb.find({tipo:{$in:["Revista","Audiobook"]}})

// Tamaño exacto de array: Encuentra el libro que tiene exactamente 4 valores registrados en su campo "ediciones".

db.rb.find({ediciones:{$size:4}})

// Eliminar campo específico: En el documento de "Atomic Habits", el campo "lectura_media_dias" ya no es relevante. Elimina este campo del documento.

// db.rb.updateOne({titulo:"Atomic Habits"},{$unset:{lectura_media_dias:""}})

// Eliminar de un array: Resulta que "1984" ya no se categoriza como "Politica" en este sistema. Elimina ese valor específico del campo "generos".

// db.rb.updateOne({titulo:"1984"},{$pull:{generos:"Politica"}})
// Renombrar campo: Para unificar criterios, cambia el nombre del campo "paginas" por "extension_paginas" en todos los documentos de la colección.
// db.rb.updateMany({},{$rename:{"paginas":"extension_paginas"}})
// Ordenación compuesta: Muestra todos los documentos ordenados primero por el campo "tipo" (ascendente) y, en caso de empate, por el campo "año_publicacion" (descendente)
// db.rb.find({}).sort({tipo:1,año_publicacion:-1})


db.rb.find({'co_autor.edad':"22"})










































// db.rb.insertMany([
//   {
//     "titulo": "El nombre del viento",
//     "tipo": "Libro",
//     "autor": "Patrick Rothfuss",
//     "paginas": 880,
//     "generos": ["Fantasia", "Aventura"],
//     "año_publicacion": 2007,
//     "prestamos": 150,
//     "disponible": true,
//     "idiomas": ["Español", "Ingles"]
//   },
//   {
//     "titulo": "Atomic Habits",
//     "tipo": "Libro",
//     "autor": "James Clear",
//     "paginas": 320,
//     "generos": ["Autoayuda", "Productividad"],
//     "año_publicacion": 2018,
//     "prestamos": 300,
//     "disponible": true,
//     "lectura_media_dias": 12
//   },
//   {
//     "titulo": "The Joe Rogan Experience",
//     "tipo": "Audiobook",
//     "autor": "Joe Rogan",
//     "duracion_minutos": 180,
//     "generos": ["Entrevista", "Sociedad"],
//     "año_publicacion": 2009,
//     "estado": "Activo",
//     "oyentes_mensuales": 1000000
//   },
//   {
//     "titulo": "National Geographic - Enero",
//     "tipo": "Revista",
//     "paginas": 120,
//     "generos": ["Ciencia", "Naturaleza"],
//     "año_publicacion": 2024,
//     "frecuencia": "Mensual",
//     "disponible": false
//   },
//   {
//     "titulo": "1984",
//     "tipo": "Libro",
//     "autor": "George Orwell",
//     "paginas": 328,
//     "generos": ["Distopia", "Politica"],
//     "año_publicacion": 1949,
//     "prestamos": 500,
//     "disponible": true,
//     "ediciones": [1949, 1990, 2010, 2021]
//   },
//   {
//     "titulo": "Capa y Espada",
//     "tipo": "Comic",
//     "autor": "Varios",
//     "paginas": 48,
//     "generos": ["Aventura", "Accion"],
//     "año_publicacion": 2015,
//     "prestamos": 25,
//     "estado": "Descatalogado"
//   },
//   {
//     "titulo": "Deep Work",
//     "tipo": "Libro",
//     "autor": "Cal Newport",
//     "paginas": 304,
//     "generos": ["Productividad", "Enfoque"],
//     "año_publicacion": 2016,
//     "prestamos": 120,
//     "disponible": true
//   }
// ]);