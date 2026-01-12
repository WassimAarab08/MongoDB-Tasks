use("Universo");

// 1. Encuentra todos los documentos cuyo campo tipo sea Planeta.
// db.objetos_espaciales.find({tipo:"Planeta"})

// 2. Encuentra los objetos espaciales que est en a menos de 100,000,000 km de la Tierra.
// db.objetos_espaciales.find({distancia_tierra_km: {$lt : 100000000}})

// 3. Busca todos los objetos que tengan Gigante gaseoso o Habitable dentro de su lista de caracteristicas.
// db.objetos_espaciales.find({caracteristicas:{$in:["Gigante gaseoso","Habitable"]}})

// 4. Encuentra objetos que sean de tipo Planeta y que adem ́as tengan una masa indice mayor a 50.

// db.objetos_espaciales.find({$and :[{tipo:"Planeta"},{masa_indice:{$gt:50}}]})
// db.objetos_espaciales.find({tipo:"Planeta", masa_indice:{$gt:50}})

// 5. Muestra los 3 objetos mas lejanos a la Tierra, ordenados de mayor a menor distancia.
// db.objetos_espaciales.find({}).sort({distancia_tierra_km:-1}).limit(3)

// 6. Ordena alfab ́eticamente por nombre, ignora los 2 primeros resultados y muestra los 3 siguientes.
// db.objetos_espaciales.find({}).sort({nombre:1}).skip(2).limit(3)

// 7. El telescopio Hubble ha necesitado una nueva reparaci ́on. Actualiza su documento para establecer el campo
// estado a En mantenimiento.

// db.objetos_espaciales.updateOne({nombre:"Hubble"},{$set:{estado: "En mantenimiento"}})
// db.objetos_espaciales.find({nombre:"Hubble"})

// 8. Se ha descubierto una nueva caracter ́ıstica en Marte: ahora sabemos que tiene Agua subterr ́anea. A ̃nade este
// valor a su array de caracteristicas.

// db.objetos_espaciales.updateOne({nombre:"Marte"},{$push:{caracteristicas:"Agua subterranea"}})
// db.objetos_espaciales.find({nombre:"Marte"})

// 9. Sobre la Voyager 1, incrementa su campo misiones exitosas en 1.

// db.objetos_espaciales.updateOne({nombre:"Voyager 1"},{$inc:{misiones_exitosas:1}})
// db.objetos_espaciales.findOne({nombre:"Voyager 1"})

// 10. El Sputnik 1 ya no existe f ́ısicamente (se quem ́o en la atm ́osfera). Elimina su documento de la base de datos.

// db.objetos_espaciales.deleteOne({nombre:"Sputnik 1"})

// 11. Encuentra todos los objetos cuyo nombre empiece por la letra ”S”.
//  db.objetos_espaciales.find({nombre:{$regex :/^S/}})

// 12. Hay objetos que tienen lunas y otros que no. Encuentra solo los documentos que tengan el campo lunas principales
// (o lunas conocidas), independientemente de su valor.
//  db.objetos_espaciales.find( {$or : [{lunas_conocidas:{ $exists:true}},{lunas_principales:{ $exists:true}}]})

// 13. Encuentra los objetos espaciales (sat ́elites o sondas) que fueron lanzados entre el a ̃no 1950 y 1980.

// db.objetos_espaciales.find({ lanzamiento: { $gte: 1950, $lte: 1980 } });

// 14. Queremos estudiar todo lo que no sean planetas. Busca todos los documentos cuyo tipo NO sea Planeta.

//  db.objetos_espaciales.find({tipo:{$ne:"Planeta"}}).pretty()


// 15. Encuentra los documentos que sean de tipo Estrella o que sean de tipo Cometa.

//  db.objetos_espaciales.find({tipo:{$in:["Estrella","Cometa"]}}).pretty()


// 16. Encuentra el planeta que tiene exactamente 4 lunas registradas en su array de lunas principales.

//  db.objetos_espaciales.find({lunas_principales:{$size:4}})

// 17. El campo descubierto con valor Antig ̈uedad es redundante para ciertos an ́alisis. Elimina este campo del
// documento de J ́upiter.
//  db.objetos_espaciales.updateOne({nombre:"Jupiter"},{$unset:{descubierto:""}})

//  db.objetos_espaciales.find({nombre:"Jupiter"})



// 18. Resulta que Marte ya no se considera Polvoriento para este estudio. Elimina ese valor espec ́ıfico de su array de
// caracteristicas.
//   db.objetos_espaciales.update({nombre:"Marte"},{$pull:{caracteristicas:"Polvoriento"}})

// 19. Para estandarizar la base de datos, cambia el nombre del campo masa indice a masa relativa en todos los
// documentos.
// db.objetos_espaciales.updateMany({},{$rename:{masa_indice:"masa_relativa"}})

// 20. Muestra todos los objetos ordenados primero por tipo en orden alfab ́etico ascendente, y dentro de cada tipo,
// por distancia tierra km en orden descendente.

db.objetos_espaciales.find({}).sort({tipo:1,distancia_tierra_km:-1})


// db.createCollection("objetos_espaciales")
// db.objetos_espaciales.insertMany([
//   {
//     "nombre": "Marte",
//     "tipo": "Planeta",
//     "distancia_tierra_km": 225000000,
//     "masa_indice": 0.107,
//     "caracteristicas": ["Rocoso", "Oxido de hierro", "Polvoriento"],
//     "descubierto": "Antiguedad",
//     "temperatura_media": -63,
//     "misiones_exitosas": 15
//   },
//   {
//     "nombre": "Jupiter",
//     "tipo": "Planeta",
//     "distancia_tierra_km": 778000000,
//     "masa_indice": 317.8,
//     "caracteristicas": ["Gigante gaseoso", "Anillos tenues", "Gran Mancha Roja"],
//     "descubierto": "Antiguedad",
//     "lunas_principales": ["Io", "Europa", "Ganimedes", "Calisto"],
//     "misiones_exitosas": 9
//   },
//   {
//     "nombre": "ISS (Estacion Espacial Internacional)",
//     "tipo": "Satelite Artificial",
//     "distancia_tierra_km": 408,
//     "masa_indice": 0.00000000042,
//     "caracteristicas": ["Habitable", "Laboratorio", "Cooperacion internacional"],
//     "lanzamiento": 1998,
//     "tripulacion_actual": 7,
//     "estado": "Activo"
//   },
//   {
//     "nombre": "Sol",
//     "tipo": "Estrella",
//     "distancia_tierra_km": 149600000,
//     "masa_indice": 333000,
//     "caracteristicas": ["Enana amarilla", "Plasma", "Fusion nuclear"],
//     "temperatura_superficie": 5500,
//     "sistema": "Sistema Solar"
//   },
//   {
//     "nombre": "Voyager 1",
//     "tipo": "Sonda Espacial",
//     "distancia_tierra_km": 24000000000,
//     "masa_indice": 0.00000000072,
//     "caracteristicas": ["Interestelar", "Disco de Oro", "Antigua"],
//     "lanzamiento": 1977,
//     "estado": "Activo",
//     "misiones_exitosas": 1
//   },
//   {
//     "nombre": "Halley",
//     "tipo": "Cometa",
//     "distancia_tierra_km": 5000000000,
//     "periodo_orbital_anios": 75,
//     "caracteristicas": ["Hielo", "Cola visible", "Periodico"],
//     "ultimo_avistamiento": 1986
//   },
//   {
//     "nombre": "Saturno",
//     "tipo": "Planeta",
//     "distancia_tierra_km": 1400000000,
//     "masa_indice": 95.2,
//     "caracteristicas": ["Gigante gaseoso", "Anillos visibles", "Vientos rapidos"],
//     "lunas_conocidas": 82
//   },
//   {
//     "nombre": "Sputnik 1",
//     "tipo": "Satelite Artificial",
//     "distancia_tierra_km": 0,
//     "caracteristicas": ["Primer satelite", "Sovietico", "Metal pulido"],
//     "lanzamiento": 1957,
//     "estado": "Destruido"
//   },
//   {
//     "nombre": "Hubble",
//     "tipo": "Telescopio Espacial",
//     "distancia_tierra_km": 547,
//     "caracteristicas": ["Fotografia profunda", "Orbita baja", "Espejo primario"],
//     "lanzamiento": 1990,
//     "reparaciones": 5
//   },
//   {
//     "nombre": "Proxima Centauri",
//     "tipo": "Estrella",
//     "distancia_tierra_km": 40208000000000,
//     "masa_indice": 40000,
//     "caracteristicas": ["Enana roja", "Vecina", "Fulgurante"],
//     "sistema": "Alpha Centauri"
//   }
// ]);
