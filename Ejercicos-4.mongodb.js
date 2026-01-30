use("juegos");

// 1. Muestra el videojuego con el tercer rating m ́as alto. No puedes seleccionarlo mirando el id.

db.videogames.aggregate([{ $sort: { rating: -1 } }, { $limit: 1 }]);

// 2. Analiza el siguiente output y crea un m ́etodo usando agregaciones que produzca la misma salida. Averiguar
// qu ́e se est ́a imprimiendo es parte del ejercicio.
// [
// {
// "_id": "vg_005",
// "totalPlatforms": 5
// }
// ]

db.videogames.aggregate([
  { $match: { _id: "vg_005" } },
  { $project: { _id: 1, totalPlatforms: { $size: "$platforms" } } },
]);
//
// 3. Muestra el precio promedio de los videojuegos por g ́enero. Considera que un videojuego puede tener m ́ultiples
// g ́eneros (usa $unwind). El resultado debe mostrar el g ́enero y el precio promedio.

db.videogames.aggregate([
  {
    $unwind: {
      path: "$genre",
    },
  },
  {
    $group: {
      _id: "$genre",
      accumulatorN: { $avg: "$price" },
    },
  },
]);

// 4. Encuentra todos los videojuegos desarrollados por empresas de “Japan” y muestra  ́unicamente el t ́ıtulo del
// juego y el nombre del desarrollador.

db.videogames.aggregate([
  {
    $match: {
      "developer.country": "Japan",
    },
  },
  {
    $project: {
      _id: 0,
      title: 1,
      nombre_desarollador: "$developer.name",
    },
  },
]);

// 5. Calcula el n ́umero total de copias vendidas por cada publisher. Ordena el resultado de mayor a menor.

db.videogames.aggregate([
  {
    $group: {
      _id: "$publisher",
      numero_copias_vendidas: { $sum: "$copiesSold" },
    },
  },
  {
    $sort: {
      numero_copias_vendidas: -1,
    },
  },
]);

// 6. Muestra los videojuegos que tengan un rating superior a 90 y que hayan sido lanzados despu ́es del a ̃no 2016.
// Muestra solo el t ́ıtulo, rating y a ̃no de lanzamiento.

db.videogames.aggregate([
  {
    $match: {
      rating: { $gt: 90 },
      releaseYear: { $gt: 2016 },
    },
  },
  {
    $project: {
      _id: 0,
      title: 1,
      rating: 1,
      releaseYear: 1,
    },
  },
]);
// 7. Agrupa los videojuegos por pa ́ıs del desarrollador y calcula el promedio de copias vendidas por cada pa ́ıs.
// Ordena por promedio descendente.
db.videogames.aggregate([
  {
    $group: {
      _id: "$developer.country",
      promedio_copias: { $avg: "$copiesSold" },
    },
  },
  {
    $sort: {
      promedio_copias: 1,
    },
  },
]);
// 8. Encuentra el videojuego m ́as vendido de cada g ́enero. El resultado debe mostrar el g ́enero, el t ́ıtulo del juego
// y las copias vendidas. (Pista: usa $unwind, $sort y $group con $first)

db.videogames.aggregate([
  {
    $unwind: {
      path: "$genre",
    },
  },
  {
    $sort: {
      copiesSold: -1,
    },
  },
  {
    $group: {
      _id: "$genre",
      titulo: { $first: "$title" },
      cantidad_ventas: { $first: "$copiesSold" },
    },
  },
]);

// 9. Muestra los desarrolladores que han creado m as de un videojuego en la colecci ́on. Muestra el nombre del
// desarrollador y la cantidad de juegos.

db.videogames.aggregate([
  {
    $group: {
      _id: "$developer.name",
      numero_juegos: { $sum: 1 },
    },
  },
  {
    $match: {
      numero_juegos: { $gt: 1 },
    },
  },
]);
// 10. Calcula el precio total que costarıa comprar todos los videojuegos de cada plataforma. Considera que un juego
// puede estar en multiples plataformas.

use("juegos");
db.videogames.aggregate([
  {
    $unwind: {
      path: "$platforms",
    },
  },
  {
    $group: {
      _id: "$platforms",
      precio: { $sum: "$price" },
    },
  },
  {
    $project: {
      _id: 1,
      precio: { $round: ["$precio", 2] },
    },
  },
]);

// 11. Encuentra los videojuegos con un precio inferior a 30 y que tengan al menos 2 premios. Muestra el tıtulo, precio
// y numero de premios.

db.videogames.aggregate([
  {
    $match: {
      price: { $lt: 30 },
      "awards.1": { $exists: true },
    },
  },

  {
    $project: {
      title: 1,
      price: 1,
      premios: { $size: "$awards" },
    },
  },
]);
// 12. Muestra el a ̃no de lanzamiento con mayor n ́umero de videojuegos publicados. El resultado debe mostrar el a ̃no
// y la cantidad de juegos.
db.videogames.aggregate([
  {
    $group: {
      _id: "$releaseYear",
      total: { $sum: 1 },
    },
  },
  {
    $sort: {
      releaseYear: -1,
    },
  },
  {
    $limit: 1,
  },
]);

// 13. Calcula el rating promedio de los videojuegos desarrollados por empresas de cada pa ́ıs, pero solo para aquellos
// pa ́ıses que tengan un rating promedio superior a 92.
db.videogames.aggregate([
  {
    $group: {
      _id: "$developer.country",
      promedio: { $avg: "$rating" },
    },
  },

  {
    $match: {
      promedio: { $gt: 92 },
    },
  },
  {
    $project: {
      _id: 0,
      pais: "$_id",
      promedio: 1,
    },
  },
]);
// 14. Encuentra los videojuegos que contengan la palabra “The” en el t ́ıtulo y que tengan un rating superior a 92.
// Usa una expresi ́on regular y muestra t ́ıtulo, rating y desarrollador.

// 15. Muestra los 3 g ́eneros con mayor promedio de copias vendidas. Debe aparecer el g ́enero y el promedio de ventas.

db.videogames.aggregate([
  {
    $unwind: {
      path: "$genre",
    },
  },
  {
    $group: {
      _id: "$genre",
      copias_media: { $avg: "$copiesSold" },
    },
  },
  {
    $sort: {
      copias_media: -1,
    },
  },
  {
    $limit: 3,
  },
]);

// 16. Crea una agregaci ́on que muestre el videojuego m ́as caro y el m ́as barato de cada a ̃no de lanzamiento. El
// resultado debe incluir el a ̃no, y para cada uno: t ́ıtulo del juego m ́as caro, su precio, t ́ıtulo del juego m ́as barato
// y su precio.

db.videogames.aggregate([
  {
    $sort: {
      price: 1,
    },
  },
  {
    $group: {
      _id: "$releaseYear",
      juego_mas_barato: { $first: "$title" },
      precio_minimo: { $first: "$price" },

      juego_mas_caro: { $last: "$title" },
      precio_maximo: { $last: "$price" },
    },
  },
  { $sort: { _id: 1 } },
  {
    $project: {
      _id: 0,
      año: "$_id",
      juego_mas_barato: 1,
      precio_minimo: 1,
      juego_mas_caro: 1,
      precio_maximo: 1,
    },
  },
]);

// 17. Usando un cursor, calcula la media del rating de todos los videojuegos desarrollados por “FromSoftware”.
// Muestra el resultado en el siguiente formato:
// Average rating for FromSoftware games: XX.XX
let ratings = [];
db.videogames
  .aggregate([
    {
      $match: {
        "developer.name": "FromSoftware",
      },
    },
  ])
  .forEach((game) => ratings.push(game.rating));

let media = ratings.reduce((a, b) => a + b, 0) / ratings.length;
print(`Average rating for FromSoftware games: ${media.toFixed(2)}`);
// 18. Usando un cursor, recorre todos los videojuegos con precio superior a 50 y muestra por pantalla el t ́ıtulo y el
// precio de cada uno con el formato:
// Title: XXXXX - Price: $XX.XX

db.videogames.find({ price: { $gt: 50 } }).forEach((game) => {
  print(`Title: ${game.title} - Price: $${game.price}`);
});
// 19. Usando un cursor, encuentra el videojuego con m ́as copias vendidas. Muestra el tıtulo y las copias vendidas.
use("juegos");
let maxPrice = { copiesSold: 0 };
db.videogames.find({}).forEach((game) => {
  if (game.copiesSold > maxPrice.copiesSold) {
    maxPrice = game;
  }
});
print(`Title: ${maxPrice.title} - Copys:${maxPrice.copiesSold}`);
// 20. Usando un cursor, cuenta cu ́antos videojuegos hay de cada plataforma. Ten en cuenta que cada videojuego
// puede tener m ́ultiples plataformas. Muestra el resultado con el formato:
// Platform: XXXXX - Count: XX
let platforms = {};
db.videogames.find({}).forEach((game) => {
  game.platforms.forEach((p) => {
    platforms[p] = (platforms[p] || 0) + 1;
  });
});
print(platforms);
