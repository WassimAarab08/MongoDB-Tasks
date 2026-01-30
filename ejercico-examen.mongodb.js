use("examen_23_24");

// 1. (20 puntos) Considera la colecci ́on orders proporcionada por el profesor. Muestra el documento con el cuarto
// precio total m ́as bajo. Obviamente, no puedes seleccionarlo mirando el id.

db.orders.find({}).sort({ total_price: 1 }).skip(3).limit(1);

// 2. (20 puntos) Considera la colecci ́on orders proporcionada por el profesor. Analiza el siguiente output y, haciendo
// uso de las agregaciones, crea un m ́etodo en JS que produzca la misma salida. Averiguar qu ́e se est ́a imprimiendo
// es tambi ́en parte del ejercicio.
// 1 [
// 2 {
// 3 " _id ": " order_007 ",
// 4 " totalItems ": 8
// 5 }
// 6 ]

db.orders.aggregate([
  {
    $project: {
      _id: 1,
      totalItems: { $sum: "$items.quantity" },
    },
  },
  {
    $sort: {
      totalItems: -1,
    },
  },
  {
    $limit: 1,
  },
]);

// 3. (20 puntos) Considera la colecci ́on orders proporcionada por el profesor. Haciendo uso de un cursor, calcula la
// media del precio total de los pedidos del customer con id = cust 002. Si te fijas, este cliente ha realizado dos
// pedidos, cuyo precio total es 45 y 70 respectivamente. El resultado que debes mostrar por pantalla es el siguiente
// (donde cust 002 y 57.5 son variables en la instrucci ́on print):
// 1 Average total price for customer cust_002 : 57.5

cursor = db.orders.find({ customer_id: "cust_002" });
numero_pedidos = 0;
total = 0;
cust = "";
while (cursor.hasNext()) {
  const pedido = cursor.next();
  numero_pedidos++;
  cust = pedido.customer_id;
  total += pedido.total_price;
}

print(`${cust}:${total / numero_pedidos}`);

// 4. (20 puntos) Considera la colecci ́on products proporcionada por el profesor. Usando agregaciones, muestra el
// precio medio de los productos de cada categor ́ıa. Es decir, muestra el siguiente resultado:
// 1 [
// 2 {
// 3 " averagePrice ": 620 ,
// 4 " category ": " Electronics "
// 5 },
// 6 {
// 7 " averagePrice ": 74 ,
// 8 " category ": " Fashion "
// 9 }
// 10 ]

db.products.aggregate([
  {
    $group: {
      _id: "$category",
      averagePrice: { $avg: "$price" },
    
    },
  },
  {
    $project: {
      _id: 0,              
      category: "$_id",   
      averagePrice: 1     
    }
  }
]);

// 5. (20 puntos) Considera la colecci ́on books proporcionada por el profesor. Crea una consulta find() para mostrar
// los autores que sean de nacionalidad Brit ́anica con libros que contengan la palabra The y tengan m ́as de 250
// p ́aginas. Para buscar los libros con la palabra The debes usar title: /The/. El resultado deber ́ıa ser el siguiente
// (observa los campos que se muestran):
// 1 [
// 2 {
// 3 " title ": " The Lord of the Rings ",
// 4 " author ": {
// 5 " name ": "J.R.R. Tolkien "
// 6 },
// 7 " pages ": 1178
// 8 }
// 9 ]

