import Category from '../models/category';
import Product from '../models/product';

export let CART = [];

export const CATEGORIES = [
  new Category("c1", "T-Shirts", "https://github.com/danielronen/React-Native-/blob/main/Product%20images/T%20Shirts/logo.png?raw=true", 6),
  new Category("c2", "Pants", "https://www.pngall.com/wp-content/uploads/5/Pant-PNG-Images.png", 6),
  new Category("c3", "Hoodies", "https://github.com/danielronen/React-Native-/blob/main/Product%20images/Hoodies/logo.png?raw=true", 6),
  new Category("c4", "Coats", "https://github.com/danielronen/React-Native-/blob/main/Product%20images/Coats/logo.png?raw=true", 6),
  new Category("c5", "Shoes", "https://github.com/danielronen/React-Native-/blob/main/Product%20images/Shoes/adidas-originals-skate-shoe-sneakers-adidas-adidas-shoes-e31bac73d9379cba33a6bf13749e96ac.png?raw=true", 6),
  new Category("c6", "Accessories", "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/08/bp.png?auto=format&q=60&fit=max&w=930", 6),
];
//let img = require("../assets/Product images/T Shirts/AdidasTshirt.png")
/////////////////////////////////////////////// T SHIRTS //////////////////////////////////////////////////////////

export const PRODUCTS = [
  new Product(
    "p1", // product id
    ["c1"], // category id
    "Adidas T Shirt",// title
    78.90, // price
    19.90, // shipping cost
    "https://github.com/danielronen/React-Native-/blob/main/Product%20images/T%20Shirts/AdidasTshirt.png?raw=true", // image ling from github
    `T-shirt by Adidas
     - Part of our responsible edit
     - Crew neck
     - Short sleeves
     - Logo print to chest
     - Regular fit.`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ], // Sizes Array
    3 // Rating
  ),
  new Product(
    "p2", // product id
    ["c1"], // category id
    "Calvin Klein Shirt",// title
    149.90,  // price
    19.90,  // shipping cost
    "https://github.com/danielronen/React-Native-/blob/main/Product%20images/T%20Shirts/Calvin%20Klein%20T%20Shirt.jpg?raw=true",
    `     Soft, breathable jersey Made with organic
     cotton Grown using less water and 
     no pesticides It’s a win-win
     improving the environment for both 
     cotton farmers and wildlife
     Main: 100% Organic Cotton.`,
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
    "p3", // id
    ['c1'], // countryIds
    "Champion T Shirt", // title
    189.90,
    19.90,
    "https://github.com/danielronen/React-Native-/blob/main/Product%20images/T%20Shirts/Champion%20T%20Shirt.jpg?raw=true", //imageUrl
    `  T-shirt by Champion:
  - Your new flexCrew
  - neckShort sleeves
  - Logo to chest
  - Regular fit`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    4
  ),
  new Product(
    "p4",
    ['c1'],
    "Levi's T Shirt",
    129.90,
    19.90,
    "https://github.com/danielronen/React-Native-/blob/main/Product%20images/T%20Shirts/Levis%20T%20Shirt.jpg?raw=true",
    `T-shirt by Levi's:
     - Part of our responsible edit
     - Crew neck
     - Short sleeves
     - Logo embroidery detail
     - Slim fit`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    3
  ),
  new Product(
    "p5",
    ["c1"],
    "Vans T Shirt",
    159.90, " ₪",
    19.90, " ₪",
    "Vans img url",
    `T-shirt by Vans:
     - Act casual
     - Crew neck
     - Short sleeves
     - Logo patch detail
     - Regular fit`,
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    4
  ),
  new Product(
    "p6",
    ["c1"],
    "Tommy Hilfiger T Shirt",
    259.90, " ₪",
    19.90, " ₪",
    "https://media-cdn.tripadvisor.com/media/photo-s/02/5a/32/38/filename-p1010466-jpg.jpg",// <----- Tommy T shirt URL img
    "T-shirt by Tommy Hilfiger:",
    "- Part of our responsible edit",
    "- Crew neck",
    "- Short sleeves",
    "- Logo print to chest",
    "- Branded back print",
    "- Relaxed fit",
    "- Unisex style",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    4
  ),
  /////////////////////////////////////////////// PANTS //////////////////////////////////////////////////////////
  new Product(
    "p7",
    ["c2"],
    "Nike Tech Fleece Joggers",
    399.90, " ₪",
    19.90, " ₪",
    "https://s.inspirockcdn.com/ds10/photos/France/2/louvre-museum--986329674.jpg", //<------- Nike Tech Fleece Joggers img URL
    "Joggers by Nike:",
    "- This item is excluded from promo",
    "- Elasticated drawstring waist",
    "- Side pockets",
    "- Zip side pocket",
    "- Nike logo print",
    "- Fitted cuffs",
    "- Regular, tapered fit",
    "- A standard cut around the thigh with a narrow shape through the leg",
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
    "p8",
    ["c2"],
    "Levi's Skinny Jeans 519",
    590.90, " ₪",
    19.90, " ₪",
    "https://wildwnc.org/wp-content/uploads/elementor/thumbs/box-turtle-6t04-ox9caoepjffn64t1jgsoiaz5an4bzr989k70ogou1y.jpg",

    `Skinny jeans by Levi's:
    \n- Part of our responsible edit
    \n- Distressed finish
    \n- Regular rise
    \n- Belt loops
    \n- Functional pockets
    \n- Branded logo to reverse
    \n- Super skinny fit`,
    [
      `30`, ', ',
      `32`, ', ',
      `34`, ', ',
      `36`, ', ',
      `38`,
    ],
    4
  ),
  new Product(
    "p9",
    ["c2"],
    "Diesel Jeans`",
    590.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Diesel jeans img url
    "Skinny jeans by Diesel:",
    "- These jeans hit different",
    "- Regular rise",
    "- Belt loops",
    "- Five pockets",
    "- Branded patch to reverse",
    "- Skinny fit",
    [
      `28`, ', ',
      `30`, ', ',
      `32`, ', ',
      `34`, ', ',
      `36`,
    ],
    5
  ),
  new Product(
    "p10",
    ["c2"],
    "Adidas Joggers",
    289.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Adidas joggers img url
    "Joggers by adidas:",
    "- Can't go wrong in sweats",
    "- Elasticated drawstring waist",
    "- Functional pockets",
    "- Logo print to thigh",
    "- 3-Stripes branding",
    "- Ribbed cuffs",
    "- Regular, tapered fit",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    3
  ),
  new Product(
    "p11",
    ["c2"],
    "G-Star Jeans",
    775.00, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Adidas joggers img url
    "Slim jeans by G-Star:",
    "- It's all in the jeans",
    "- Belt loops",
    "- Functional pockets",
    "- Distressed details",
    "- Slim fit",
    [
      `28`, ', ',
      `30`, ', ',
      `32`, ', ',
      `34`, ', ',
      `36`,
    ],
    3
  ),
  new Product(
    "p12",
    ["c2"],
    "Abercrombie & Fitch Jeans",
    379.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Adidas joggers img url
    "Skinny jeans by Abercrombie & Fitch:",
    "- It's all in the jeans",
    "- Distressed finish",
    "- High rise",
    "- Belt loops",
    "- Five pockets",
    "- Super-skinny fit",
    [
      `28`, ', ',
      `30`, ', ',
      `32`, ', ',
      `34`, ', ',
      `36`,
    ],
    2
  ),
  /////////////////////////////////////////////// HOODIES //////////////////////////////////////////////////////////
  new Product(
    "p13",
    ["c3"],
    "Hugo Boss Hoodie",
    669, 90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Boss Hoodie img url
    "Hoodie by Hugo Boss:",
    "Always here for a sweatshirt",
    "Drawstring hood",
    "Logo print to chest",
    "Pouch pocket",
    "Regular fit",
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    4
  ),
  new Product(
    "p14",
    ["c3"],
    "Polo Ralph Lauren Hoodie",
    869.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Hoodie by Polo Ralph Lauren:",
    "- Act casual",
    "- Drawstring hood",
    "- Graphic logo print",
    "- Side pockets",
    "- Fitted trims",
    "- Regular fit",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    5
  ),
  new Product(
    "p15",
    ["c3"],
    "Tommy Hilfiger Hoodie",
    869.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Hoodie by Polo Ralph Lauren:",
    "- Act casual",
    "- Drawstring hood",
    "- Graphic logo print",
    "- Side pockets",
    "- Fitted trims",
    "- Regular fit",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    5
  ),
  new Product(
    "p16",
    ["c3"],
    "The North Face Hoodie",
    190.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Hoodie by The North Face:",
    "- Looks cool, feels comfy",
    "- Crew neck",
    "- Drop shoulders",
    "- Chest and back print",
    "- Relaxed fit",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    4
  ),
  new Product(
    "p17",
    ["c3"],
    "The North Face Hoodie",
    190.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Hoodie by The North Face:",
    "- Looks cool, feels comfy",
    "- Crew neck",
    "- Drop shoulders",
    "- Chest and back print",
    "- Relaxed fit",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    4
  ),
  new Product(
    "p18",
    ["c3"],
    "Tommy Hilfiger Hoodie",
    719.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Hoodie by Tommy Hilfiger:",
    "- Part of our responsible edit",
    "- Drawstring hood",
    "- Logo to chest",
    "- Pouch pocket",
    "- Regular fit",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    3
  ),
  /////////////////////////////////////////////// COATS //////////////////////////////////////////////////////////
  new Product(
    "p19",
    ["c4"],
    "Ellesse Jacket",
    279.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Jacket by Ellesse:",
    "- For when it's cold, but not that cold",
    "- Funnel neck",
    "- Drawstring hood",
    "- Half-zip opening",
    "- Over-the-head style",
    "- Pouch pocket",
    "- Reflective ellesse logo",
    "- Regular fit",
    "- True to size",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    4
  ),
  new Product(
    "p20",
    ["c4"],
    "The North Face Jacket",
    719.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Ski jacket by The North Face",
    "- That powder-fresh aesthetic",
    "- Adjustable hood",
    "- Zip fastening",
    "- Underarm vents for breathability",
    "- Zip chest and side pockets",
    "- Zip wrist pocket with goggle wipe",
    "- Internal media pocket",
    "- Two internal goggle pockets",
    "- Integrated cuff gussets",
    "- Elasticated powder skirt",
    "- Logo print to chest and back",
    "- Regular fit",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    3
  ),
  new Product(
    "p21",
    ["c4"],
    "Emporio Armani",
    1, 529.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Jacket by Emporio Armani:",
    "- Layer up",
    "- Adjustable toggle hood",
    "- High neck",
    "- Zip fastening",
    "- Logo to sleeve",
    "- Functional pockets",
    "- Regular fit",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    5
  ),
  new Product(
    "p22",
    ["c4"],
    "Carhartt WIP Jacket",
    549.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Jacket by Carhartt WIP:",
    "- Low-key layering",
    "- Adjustable toggle hood",
    "- High collar",
    "- Zip fastening",
    "- Functional pockets",
    "- Drawstring hem",
    "- Regular fit",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`,
    ],
    4
  ),
  new Product(
    "p23",
    ["c4"],
    "Tommy Hilfiger Jacket",
    1, 259.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Bomber jacket by Tommy Hilfiger:",
    "- Part of our responsible edit",
    "- Baseball collar",
    "- Zip fastening",
    "- Branded design",
    "- Side pockets",
    "- Regular fit",
    [
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    3
  ),
  new Product(
    "p24",
    ["c4"],
    "Tommy Hilfiger Hoodie",
    719.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Coat by Abercrombie & Fitch",
    "- Feel the benefit",
    "- Drawstring hood",
    "- Zip fastening",
    "- Multiple pockets",
    "- Longer length",
    "- Regular fit",
    [
      `XS`, ', ',
      `S`, ', ',
      `M`, ', ',
      `L`, ', ',
      `XL`, ', ',
      `XXL`,
    ],
    3
  ),
  /////////////////////////////////////////////// SHOES //////////////////////////////////////////////////////////
  new Product(
    "p25",
    ["c5"],
    "Adidas Stan Smith",
    439.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Trainers by adidas:",
    "- This item is excluded from promo",
    "- Part of our responsible edit",
    "- Low-profile design",
    "- Lace-up fastening ",
    "- Padded tongue and cuff",
    "- Signature adidas branding",
    "- Perforated toe for breathability",
    "- Durable rubber outsole",
    "- Textured grip tread",
    [
      `EU 36`, ', ',
      `EU 37`, ', ',
      `EU 38`, ', ',
      `EU 39`, ', ',
      `EU 40`, ', ',
      `EU 41`, ', ',
      `EU 42`, ', ',
      `EU 43`, ', ',
      `EU 44`, ', ',
      `EU 45`,
    ],
    4
  ),
  new Product(
    "p26",
    ["c5"],
    "Nike Air Max 90",
    439.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Trainers by Nike",
    "- This item is excluded from promo",
    "- Low-top design",
    "- Lace-up fastening",
    "- Branded tongue and cuff",
    "- Padded for comfort",
    "- Leather, suede and rubber panels",
    "- Nike Swoosh logo details",
    "- Coated leather overlays",
    "- Max Air unit to heel for added cushioning",
    "- Foam midsole",
    "- Rubber waffle sole for added traction and durability",
    "- Moulded tread",
    [
      `EU 36`, ', ',
      `EU 37`, ', ',
      `EU 38`, ', ',
      `EU 39`, ', ',
      `EU 40`, ', ',
      `EU 41`, ', ',
      `EU 42`, ', ',
      `EU 43`, ', ',
      `EU 44`, ', ',
      `EU 45`,
    ],
    5
  ),
  new Product(
    "p27",
    ["c5"],
    "Reebok Classic",
    359.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Trainers by Reebok:",
    "- Because trainers are always having a moment",
    "- Lace-up fastening",
    "- Branded tongue and cuff",
    "- Padded for comfort",
    "- Reebok logo detail",
    "- Chunky sole",
    "- Moulded tread",
    [
      `EU 36`, ', ',
      `EU 37`, ', ',
      `EU 38`, ', ',
      `EU 39`, ', ',
      `EU 40`, ', ',
      `EU 41`, ', ',
      `EU 42`, ', ',
      `EU 43`, ', ',
      `EU 44`, ', ',
      `EU 45`,
    ],
    3
  ),
  new Product(
    "p28",
    ["c5"],
    "Vans Old School",
    299.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Trainers by Vans",
    "- There for you all year round",
    "- Suede toe and heel",
    "- Lace-up fastening",
    "- Branded details",
    "- Padded for comfort",
    "- Vans Old Skool logo",
    "- Chunky sole",
    "- Waffle-textured tread",
    [
      `EU 36`, ', ',
      `EU 37`, ', ',
      `EU 38`, ', ',
      `EU 39`, ', ',
      `EU 40`, ', ',
      `EU 41`, ', ',
      `EU 42`, ', ',
      `EU 43`, ', ',
      `EU 44`, ', ',
      `EU 45`,
    ],
    4
  ),
  new Product(
    "p29",
    ["c5"],
    "Nike Air Max 2021",
    749.90, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Trainers by Nike:",
    "- Part of our responsible edit",
    "- Low-profile design",
    "- Pull tab for easy entry",
    "- Round laces",
    "- Padded tongue and cuff",
    "- Signature Nike branding",
    "- Foam midsole for lightweight cushioning",
    "- Dual-pressure Air sole",
    "- Textured grip tread",
    [
      `EU 36`, ', ',
      `EU 37`, ', ',
      `EU 38`, ', ',
      `EU 39`, ', ',
      `EU 40`, ', ',
      `EU 41`, ', ',
      `EU 42`, ', ',
      `EU 43`, ', ',
      `EU 44`, ', ',
      `EU 45`,
    ],
    5
  ),
  new Product(
    "p30",
    ["c5"],
    "Adidas Ulltraboost 22",
    850.00, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Trainers by adidas:",
    "- Hit that new PB",
    "- Low-profile design",
    "- Lace-up fastening",
    "- Sock-like cuff",
    "- Signature adidas branding",
    "- Soft heel allows for natural movement of Achilles tendon",
    "- Boost midsole provides responsive, energy-returning cushioning",
    "- Stretchweb outsole with Continental™ Rubber for durability",
    "- Textured grip tread",
    [
      `EU 36`, ', ',
      `EU 37`, ', ',
      `EU 38`, ', ',
      `EU 39`, ', ',
      `EU 40`, ', ',
      `EU 41`, ', ',
      `EU 42`, ', ',
      `EU 43`, ', ',
      `EU 44`, ', ',
      `EU 45`,
    ],
    5
  ),
  /////////////////////////////////////////////// ACCESSORIES //////////////////////////////////////////////////////////
  new Product(
    "p31",
    ["c6"],
    "Tommy Hilfiger Wallet",
    265.00, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Wallet by Tommy Hilfiger:",
    "- Add-to-bag material",
    "- Monogram design",
    "- Billfold style",
    "- Internal card and note slots",
    "- Logo plaque detail",
    "- 100% Leather.",
    [
      `One Size`
    ],
    5
  ),
  new Product(
    "p32",
    ["c6"],
    "Calvin Klein Belt",
    265.00, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Belt by Calvin Klein:",
    "- Secure your style",
    "- Comes with a pin buckle and branded plaque",
    "- Adjustable length",
    "- Belt fits true to size",
    "- Please buy in your normal trouser size",
    [
      `85 CM`, ', ',
      `90 CM`, ', ',
      `95 CM`, ', ',
      `100 CM`,
    ],
    5
  ),
  new Product(
    "p33",
    ["c6"],
    "BOSS by Hugo Boss Belt",
    265.00, " ₪",
    19.90, " ₪",
    "https://www.citytoursbarcelona.com/img/tours/comprehensive/barcelona.jpg", // <----- Polo Hoodie img url
    "Belt by BOSS By Hugo Boss",
    "Style: secured",
    "Adjustable length",
    "Pin-buckle fastening",
    "Single keeper",
    "Belt fits true to size",
    "Please buy in your normal trouser size",
    [
      `85 CM`, ', ',
      `90 CM`, ', ',
      `95 CM`, ', ',
      `100 CM`,
    ],
    4
  ),
];