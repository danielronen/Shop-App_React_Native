import Category from '../models/category';
import Product from '../models/product';

export const CATEGORIES = [
  new Category("c1", "T-Shirts", "https://github.com/danielronen/React-Native-/blob/main/Product%20images/T%20Shirts/logo.png?raw=true", 6),
  new Category("c2", "Pants", "https://www.pngall.com/wp-content/uploads/5/Pant-PNG-Images.png", 6),
  new Category("c3", "Hoddies", "https://github.com/danielronen/React-Native-/blob/main/Product%20images/Hoodies/logo.png?raw=true", 6),
  new Category("c4", "Coats", "https://github.com/danielronen/React-Native-/blob/main/Product%20images/Coats/logo.png?raw=true", 6),
  new Category("c5", "Shoes", "https://github.com/danielronen/React-Native-/blob/main/Product%20images/Shoes/adidas-originals-skate-shoe-sneakers-adidas-adidas-shoes-e31bac73d9379cba33a6bf13749e96ac.png?raw=true", 6),
  new Category("c6", "Accessories", "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/08/bp.png?auto=format&q=60&fit=max&w=930", 6),
];


export const PRODUCTS = [
  new Product(
    "t1", // product id
    ["c1"], // category id
    "Adidas T Shirt",// title
    78.90, // price
    19.90, // shipping cost
    "https://github.com/danielronen/React-Native-/blob/main/Product%20images/T%20Shirts/AdidasTshirt.png?raw=true", // image ling from github
    "Description.......................................................................",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ], // Sizes Array
    5 // Rating
  ),
  new Product(
    "t2",
    ["c1"],
    "Calvin Klein Shirt",
    "priecy",
    "trek",
    "https://github.com/danielronen/React-Native-/blob/main/Product%20images/T%20Shirts/Calvin%20Klein%20T%20Shirt.jpg?raw=true",
    "Start and end in San Miguel de Abona! With the Hiking & Trekking tour Canary Islands Walking - La Gomera and Tenerife, you have a 8 days tour package taking you through San Miguel de Abona, Spain and 5 other destinations in Spain. Canary Islands Walking - La Gomera and Tenerife includes accommodation in a hotel as well as an expert guide, meals, transport and more.    ",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    5
  ),
  new Product(
    "t3", // id
    ['c1'], // countryIds
    "How to Visit The Forbidden City", // title
    "pricey", // affordability
    "challanging", // complexity
    "https://github.com/danielronen/React-Native-/blob/main/Product%20images/T%20Shirts/Champion%20T%20Shirt.jpg?raw=true", //imageUrl
    "As the seat of power for hundreds of years, Beijing is full of examples of imperial extravagance and architectural design. In no place are these on better display than the Forbidden City, also known as the Palace Museum or gu gong in Chinese.", //description
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    5
  ),
  new Product(
    "t4",
    ['c1'],
    "New York Day Tour",
    "Pricy",
    "Simple",
    "https://github.com/danielronen/React-Native-/blob/main/Product%20images/T%20Shirts/Levis%20T%20Shirt.jpg?raw=true",
    "let's axplore New York Together, 2 Day Product in The Big Apple...",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    5
  ),
  new Product(
    "t5",
    ["c1"],
    "BET-SHEMESH DAY TOUR",
    "affordable",
    "simple",
    "https://www.betshemesh.muni.il/uploads/n/1517303274.4753.jpg",
    "Day tour in BET-SHEMESH city...",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    5
  ),
  new Product(
    "t6",
    ["c1"],
    "TURTLE IN HADERA",
    "affordable",
    "simple",
    "https://media-cdn.tripadvisor.com/media/photo-s/02/5a/32/38/filename-p1010466-jpg.jpg",

    "Day tour in Fisher village",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    5
  ),
  new Product(
    "t7",
    ["c2", "c4"],
    "From Paris to Amsterdam - 1 Week Product",
    "pricey",
    "Road trip & Tour",
    "https://s.inspirockcdn.com/ds10/photos/France/2/louvre-museum--986329674.jpg",

    "Starting at Paris(Louvre - Museum) and ends at Amsterdam(De Dam). Touring through Museums and Historical Monuments throughout the day with fun Night Outs. 5 Star Hotels and Restaurants. We will visit at 7 Museums and 4 Monuments with a free run around in the streets of Amsterdam on the last day",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    5
  ),
  new Product(
    "t8",
    ["c3"],
    "TURTLE IN Sharey Tikva",
    "affordable",
    "simple",
    "https://wildwnc.org/wp-content/uploads/elementor/thumbs/box-turtle-6t04-ox9caoepjffn64t1jgsoiaz5an4bzr989k70ogou1y.jpg",

    "Day tour in Fisher village",
    [
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    5
  ),
  new Product(
    "t9",
    ["c5"],
    "Barcelona",
    "Pricy",
    "simple",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg",
    "Day tour in the football staduim",
    [
      `M`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    5
  )
];