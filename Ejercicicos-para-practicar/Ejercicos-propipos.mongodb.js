use("Universo");

// Consulta todos los objetos que pertenezcan a las categorías "Planeta Enano" o "Estrella".

// db.objetos_espaciales.find({$or :[{tipo:"Planeta Enano"} , {tipo:"Estrella"}]})


// Muestra los objetos espaciales cuyo valor en distancia_tierra_km sea mayor a 1,000,000,000.

// db.objetos_espaciales.find({distancia_tierra_km:{$gt:1000000000}})

// Identifica todos los documentos que carecen por completo del campo llamado estado.

// db.objetos_espaciales.find({estado:{$exists:false}})

// Obtén los objetos que incluyan "Hielo" dentro de su array de caracteristicas.
// db.objetos_espaciales.find({caracteristicas:{$in:["Hielo"]}})
// db.objetos_espaciales.find({caracteristicas:"Hielo"})

// Busca los objetos cuyo lanzamiento sea posterior al año 2015 y cuyo estado sea "Activo".

// db.objetos_espaciales.find({lanzamiento:{$gt:2015},estado:"Activo"})

// Filtra los objetos de tipo "Sonda Espacial" que tengan en misiones_exitosas un valor igual a 1.

// db.objetos_espaciales.find({tipo:"Sonda Espacial",misiones_exitosas:{$eq:1}})

// Presenta la lista completa de objetos ordenada por el campo masa_indice de menor a mayor.

// db.objetos_espaciales.find({masa_indice:{$exists:true}}).sort({masa_indice:1})


// Recupera exclusivamente los 2 objetos que tengan el valor más bajo en el campo distancia_tierra_km.
// db.objetos_espaciales.find({}).sort({distancia_tierra_km:1}).limit(2)

// Modifica el documento con nombre "ISS (Estacion Espacial Internacional)" para añadirle un campo proxima_rotacion con el valor "Julio 2024".
//  db.objetos_espaciales.updateOne({nombre:"ISS (Estacion Espacial Internacional)"},{$set:{proxima_rotacion:"Julio 2024"}})

// Suma una unidad al valor del campo reparaciones en el objeto cuyo nombre es "Hubble".

// db.objetos_espaciales.updateOne({nombre:"Hubble"},{$inc:{reparaciones:1}})
 db.objetos_espaciales.find({nombre:"Neptuno1"})

// Inserta el valor "Atmosfera de Nitrogeno" al final del array caracteristicas en el documento de "Pluton".

//  db.objetos_espaciales.updateOne({nombre:"Pluton"},{$push:{caracteristicas:"Atmosfera de Nitrogeno"}})

// Elimina definitivamente el campo descubierto del documento cuyo nombre es "Neptuno".

// db.objetos_espaciales.updateOne({nombre:"Neptuno"},{$unset:{descubierto:""}})

// Encuentra los objetos que tengan un valor en el campo lunas_conocidas comprendido entre 3 y 10.
db.objetos_espaciales
// Muestra todos los registros cuyo tipo NO sea "Planeta", asegurándote de que la salida sea legible.

// Actualiza masivamente todos los documentos cuyo tipo sea "Rover" para que su estado pase a ser "En espera".

// Busca aquellos objetos cuyo campo distancia_tierra_km sea menor a 1,000.

// Encuentra objetos que tengan "Anillos" en sus caracteristicas, pero cuyo nombre NO sea "Saturno".

// Muestra el campo nombre de los objetos saltando los 5 primeros resultados y limitando la salida a los siguientes 5.

// Borra de forma permanente cualquier documento cuyo estado sea "Destruido".


// Encuentra todos los objetos cuyo tipo sea "Estrella" y cuyo sistema NO sea "Sistema Solar", O que tengan una masa_indice superior a 100,000.

// Actualiza el registro con nombre "Neptuno" para sustituir el elemento "Proteo" por "Hipocampo" dentro del array lunas_principales.

// Identifica aquellos documentos donde el array lunas_principales tenga exactamente 3 elementos.

// Añade un objeto llamado mantenimiento_info (con un subcampo fecha_revision: "2025-01-01") a todos los documentos con estado "Activo".

// Filtra los objetos que tengan en su campo caracteristicas los valores "Hielo" Y "Gueiseres" simultáneamente, o cuyo distancia_tierra_km sea mayor a 50,000,000,000,000.

// Busca objetos cuyo nombre empiece por la letra "B" o "S" y que además tengan una masa_indice superior a 1.

// Actualiza los documentos de tipo "Estrella" que no tengan el campo sistema, estableciendo dicho campo como "Desconocido".

// Localiza objetos que tengan al menos un elemento en el array lunas_principales cuyo texto comience por la letra "C".

// Muestra los objetos con misiones_exitosas mayor a 0, ordenados por tipo (descendente) y luego por distancia_tierra_km (ascendente).

// Elimina los registros cuyo tipo sea "Satelite Artificial" o "Telescopio Espacial" y cuyo año de lanzamiento sea anterior al 2000.


































// db.objetos_espaciales.insertMany([
//   {
//     "nombre": "Neptuno",
//     "tipo": "Planeta",
//     "distancia_tierra_km": 4300000000,
//     "masa_indice": 17.15,
//     "caracteristicas": ["Gigante helado", "Vientos supersonicos", "Azul intenso"],
//     "lunas_principales": ["Triton", "Nereida", "Proteo"],
//     "descubierto": 1846
//   },
//   {
//     "nombre": "Ceres",
//     "tipo": "Planeta Enano",
//     "distancia_tierra_km": 414000000,
//     "masa_indice": 0.00016,
//     "caracteristicas": ["Cinturon de asteroides", "Rocoso", "Presencia de sales"],
//     "estado": "Explorado"
//   },
//   {
//     "nombre": "Telescopio James Webb",
//     "tipo": "Telescopio Espacial",
//     "distancia_tierra_km": 1500000,
//     "caracteristicas": ["Infrarrojo", "Punto de Lagrange L2", "Escudo termico"],
//     "lanzamiento": 2021,
//     "estado": "Activo",
//     "misiones_exitosas": 1
//   },
//   {
//     "nombre": "Sirio",
//     "tipo": "Estrella",
//     "distancia_tierra_km": 81360000000000,
//     "masa_indice": 2.02,
//     "caracteristicas": ["Estrella binaria", "Blanca", "Muy brillante"],
//     "sistema": "Sirio"
//   },
//   {
//     "nombre": "Curiosity",
//     "tipo": "Rover",
//     "distancia_tierra_km": 225000000,
//     "caracteristicas": ["Laboratorio movil", "Laser", "Energia nuclear"],
//     "lanzamiento": 2011,
//     "estado": "Activo",
//     "misiones_exitosas": 1
//   },
//   {
//     "nombre": "Encelado",
//     "tipo": "Luna",
//     "distancia_tierra_km": 1272000000,
//     "caracteristicas": ["Oceano global", "Gueiseres", "Hielo"],
//     "planeta_padre": "Saturno"
//   },
//   {
//     "nombre": "Parker Solar Probe",
//     "tipo": "Sonda Espacial",
//     "distancia_tierra_km": 149000000,
//     "caracteristicas": ["Corona solar", "Alta velocidad", "Resistente al calor"],
//     "lanzamiento": 2018,
//     "estado": "Activo"
//   },
//   {
//     "nombre": "Pluton",
//     "tipo": "Planeta Enano",
//     "distancia_tierra_km": 5900000000,
//     "masa_indice": 0.0021,
//     "caracteristicas": ["Corazon de hielo", "Geologicamente activo", "Lejano"],
//     "lunas_principales": ["Caronte", "Nix", "Hidra", "Cerbero", "Estigia"]
//   },
//   {
//     "nombre": "Betelgeuse",
//     "tipo": "Estrella",
//     "distancia_tierra_km": 6000000000000000,
//     "masa_indice": 165000,
//     "caracteristicas": ["Supergigante roja", "Variable", "Cercana a supernova"],
//     "sistema": "Orion"
//   },
//   {
//     "nombre": "Tiangong",
//     "tipo": "Satelite Artificial",
//     "distancia_tierra_km": 390,
//     "caracteristicas": ["Estacion China", "Modular", "Orbita baja"],
//     "lanzamiento": 2021,
//     "estado": "Activo",
//     "tripulacion_actual": 3
//   }
// ]);
