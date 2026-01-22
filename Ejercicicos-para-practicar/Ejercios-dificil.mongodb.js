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

db.videogames.aggregate([{}]);

// 3. Muestra el precio promedio de los videojuegos por g ́enero. Considera que un videojuego puede tener m ́ultiples
// g ́eneros (usa $unwind). El resultado debe mostrar el g ́enero y el precio promedio.
// 4. Encuentra todos los videojuegos desarrollados por empresas de “Japan” y muestra  ́unicamente el t ́ıtulo del
// juego y el nombre del desarrollador.
// 5. Calcula el n ́umero total de copias vendidas por cada publisher. Ordena el resultado de mayor a menor.
// 6. Muestra los videojuegos que tengan un rating superior a 90 y que hayan sido lanzados despu ́es del a ̃no 2016.
// Muestra solo el t ́ıtulo, rating y a ̃no de lanzamiento.
// 7. Agrupa los videojuegos por pa ́ıs del desarrollador y calcula el promedio de copias vendidas por cada pa ́ıs.
// Ordena por promedio descendente.
// 8. Encuentra el videojuego m ́as vendido de cada g ́enero. El resultado debe mostrar el g ́enero, el t ́ıtulo del juego
// y las copias vendidas. (Pista: usa $unwind, $sort y $group con $first)
// 9. Muestra los desarrolladores que han creado m ́as de un videojuego en la colecci ́on. Muestra el nombre del
// desarrollador y la cantidad de juegos.
// 10. Calcula el precio total que costar ́ıa comprar todos los videojuegos de cada plataforma. Considera que un juego
// puede estar en m ́ultiples plataformas.
// 11. Encuentra los videojuegos con un precio inferior a 30 y que tengan al menos 2 premios. Muestra el t ́ıtulo, precio
// y n ́umero de premios.
// 12. Muestra el a ̃no de lanzamiento con mayor n ́umero de videojuegos publicados. El resultado debe mostrar el a ̃no
// y la cantidad de juegos.
// 13. Calcula el rating promedio de los videojuegos desarrollados por empresas de cada pa ́ıs, pero solo para aquellos
// pa ́ıses que tengan un rating promedio superior a 92.
// 14. Encuentra los videojuegos que contengan la palabra “The” en el t ́ıtulo y que tengan un rating superior a 92.
// Usa una expresi ́on regular y muestra t ́ıtulo, rating y desarrollador.
// 15. Muestra los 3 g ́eneros con mayor promedio de copias vendidas. Debe aparecer el g ́enero y el promedio de ventas.
// 16. Crea una agregaci ́on que muestre el videojuego m ́as caro y el m ́as barato de cada a ̃no de lanzamiento. El
// resultado debe incluir el a ̃no, y para cada uno: t ́ıtulo del juego m ́as caro, su precio, t ́ıtulo del juego m ́as barato
// y su precio.
// 17. Usando un cursor, calcula la media del rating de todos los videojuegos desarrollados por “FromSoftware”.
// Muestra el resultado en el siguiente formato:
// Average rating for FromSoftware games: XX.XX
// 18. Usando un cursor, recorre todos los videojuegos con precio superior a 50 y muestra por pantalla el t ́ıtulo y el
// precio de cada uno con el formato:
// Title: XXXXX - Price: $XX.XX
// 19. Usando un cursor, encuentra el videojuego con m ́as copias vendidas. Muestra el t ́ıtulo y las copias vendidas.
// 20. Usando un cursor, cuenta cu ́antos videojuegos hay de cada plataforma. Ten en cuenta que cada videojuego
// puede tener m ́ultiples plataformas. Muestra el resultado con el formato:
// Platform: XXXXX - Count: XX
