const productData = [
  {
    id: 1,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h3-product-1.jpg',
    alt: "PARSLEY POWDER",
    name: "PARSLEY POWDER",
    desc:
      "SPICES",
    price: "15",
    type: "spices",
    button: "Add to Cart"
  },
  {
    id: 2,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h3-product-2.jpg',
    alt: "CHIA SEED",
    name: "CHIA SEED",
    desc:
      "SPICES",
    price: "10",
    type: "spices",
    button: "Add to Cart"
  },
  {
    id: 3,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h3-product-3.jpg',
    alt: "DRIED PEPPER",
    name: "DRIED PEPPER",
    desc: "SPICES",
    price: "8",
    type: "spices",
    button: "Add to Cart"
  },
  {
    id: 4,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h3-product-4.jpg',
    alt: "MUSTARD SEED",
    name: "MUSTARD SEED",
    desc: "ORGANIC",
    price: "20",
    type: "organic",
    button: "Add to Cart"
  },
  {
    id: 5,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h3-product-5.jpg',
    alt: "SCORPION PEPPER",
    name: "SCORPION PEPPER",
    desc: "SPICES",
    price: "15",
    type: "spices",
    button: "Add to Cart"
  },
  {
    id: 6,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h3-product-6.jpg',
    alt: "CASSIA CINNAMON",
    name: "CASSIA CINNAMON",
    desc:
      "SPICES",
    price: "15",
    type: "spices",
    button: "Add to Cart"
  },
  {
    id: 7,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h3-product-7.jpg',
    alt: "YELLOW MUSTARD",
    name: "YELLOW MUSTARD",
    desc:
      "ORGANIC",
    price: "20",
    type: "organic",
    button: "Add to Cart"
  },
  {
    id: 8,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h3-product-8.jpg',
    alt: "PUMPKIN SEED",
    name: "PUMPKIN SEED",
    desc: "ORGANIC",
    price: "20",
    type: "organic",
    button: "Add to Cart"
  },
  {
    id: 9,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/product-9.jpg',
    alt: "GALANGAL POWDER",
    name: "GALANGAL POWDER",
    desc:
      "SPICES",
    price: "15",
    type: "spices",
    button: "Add to Cart"
  },
  {
    id: 10,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h9-product-1.jpg',
    alt: "CINNAMON SOAP",
    name: "CINNAMON SOAP",
    desc: "SOAP",
    price: "25",
    type: "soap",
    button: "Add to Cart"
  },
  {
    id: 11,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h9-product-2.jpg',
    alt: "SANDALWOOD SOAP",
    name: "SANDALWOOD SOAP",
    desc:
      "SOAP",
    price: "25",
    type: "soap",
    button: "Add to Cart"
  },
  {
    id: 12,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h9-product-3.jpg',
    alt: "STRAWBERRY SOAP",
    name: "STRAWBERRY SOAP",
    desc:
      "SOAP",
    price: "25",
    type: "soap",
    button: "Add to Cart"
  },
  {
    id: 13,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h9-product-4.jpg',
    alt: "CHOCOLATE SOAP",
    name: "CHOCOLATE SOAP",
    desc:
      "SOAP",
    price: "20",
    type: "soap",
    button: "Add to Cart"
  },
  {
    id: 14,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h9-product-5.jpg',
    alt: "GIFT BAR SOAP",
    name: "GIFT BAR SOAP",
    desc:
      "SOAP",
    price: "20",
    type: "soap",
    button: "Add to Cart"
  },
  {
    id: 15,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h9-product-6-1.jpg',
    alt: "LAVENDER SOAP",
    name: "LAVENDER SOAP",
    desc: "SOAP",
    price: "20",
    type: "soap",
    button: "Add to Cart"
  },
  {
    id: 16,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h9-product-7-1.jpg',
    alt: "HEART SHAPED SOAP",
    name: "HEART SHAPED SOAP",
    desc: "SOAP",
    price: "20",
    type: "soap",
    button: "Add to Cart"
  },
  {
    id: 17,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h9-product-8.jpg',
    alt: "ORANGE SOAP BAR",
    name: "ORANGE SOAP BAR",
    desc:
      "SOAP",
    price: "18.99",
    type: "soap",
    button: "Add to Cart"
  },
  {
    id: 18,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h9-product-9.jpg',
    alt: "ROSE SOAP",
    name: "ROSE SOAP",
    desc:
      "SOAP",
    price: "20",
    type: "soap",
    button: "Add to Cart"
  },
  {
    id: 19,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h9-product-10.jpg',
    alt: "COCOA BEAN SOAP",
    name: "COCOA BEAN SOAP",
    desc:
      "SOAP",
    price: "25",
    type: "soap",
    button: "Add to Cart"
  },
  {
    id: 20,
    img: 'https://aviana.qodeinteractive.com/wp-content/uploads/2017/09/h9-product-11-1.jpg',
    alt: "BERRY SOAP BAR",
    name: "BERRY SOAP BAR",
    desc: "SOAP",
    price: "20",
    type: "soap",
    button: "Add to Cart"
  },
  {
    id: 21,
    img: 'https://nokwareskincare.com/wp-content/uploads/2021/05/beardkit-1024x1024.jpg',
    alt: "BEARD GROOMING KIT",
    name: "BEARD GROOMING KIT",
    desc:
      "PACKAGE",
    price: "30",
    type: "packages",
    button: "Add to Cart"
  },
  {
    id: 22,
    img: 'https://nokwareskincare.com/wp-content/uploads/2019/06/voucher.jpg',
    alt: "GIFT CARD",
    name: "GIFT CARD",
    desc: "GIFT CARD PACKAGE",
    price: "25",
    type: "packages",
    button: "Add to Cart"
  },
  {
    id: 23,
    img: 'https://nokwareskincare.com/wp-content/uploads/2023/02/Box1.jpg',
    alt: "PAMPER BOX",
    name: "PAMPER BOX",
    desc:
      "PACKAGES",
    price: "30",
    type: "packages",
    button: "Add to Cart"
  },
  {
    id: 24,
    img: 'https://nokwareskincare.com/wp-content/uploads/2024/04/1-canon-3372.jpg',
    alt: "MOM GRANDE GIFT BOX",
    name: "MOM GRANDE GIFT BOX",
    desc:
      "PACKAGES",
    price: "35",
    type: "packages",
    button: "Add to Cart"
  },
  {
    id: 25,
    img: 'https://nokwareskincare.com/wp-content/uploads/2020/03/HLO3760-1.jpg',
    alt: "BIG OIL BOX",
    name: "OIL BOX GRANDE",
    desc:
      "PACKAGES",
    price: "30",
    type: "packages",
    button: "Add to Cart"
  },
  {
    id: 26,
    img: 'https://nokwareskincare.com/wp-content/uploads/2023/02/Box6-1024x1024.jpg',
    alt: "DARLING BOX",
    name: "DARLING BOX",
    desc:
      "PACKAGES",
    price: "35",
    type: "packages",
    button: "Add to Cart"
  },
  {
    id: 27,
    img: 'https://img.freepik.com/premium-psd/argan-oil-products-mockup_23-2149287524.jpg?w=740',
    alt: "MASSAGE OIL",
    name: "CASTOR OIL",
    desc:
      "OIL",
    price: "20",
    type: "oil",
    button: "Add to Cart"
  },
  {
    id: 28,
    img: 'https://img.freepik.com/premium-psd/argan-oil-products-mockup_23-2149287521.jpg?w=740',
    alt: "BAOBAB OIL",
    name: "BAOBAB OIL",
    desc:
      "OIL",
    price: "20",
    type: "oil",
    button: "Add to Cart"
  },
  {
    id: 29,
    img: 'https://img.freepik.com/free-photo/argan-oil-dropper-bottle-assortment_23-2148989124.jpg?t=st=1716554943~exp=1716558543~hmac=61a9ee791a8f709c6fb59a450bd895f89cbd861536edd2bc40b7d85baa48948e&w=740',
    alt: "NEEM OIL",
    name: "NEEM OIL",
    desc:
      "OIL",
    price: "25",
    type: "oil",
    button: "Add to Cart"
  },
  {
    id: 30,
    img: 'https://img.freepik.com/premium-photo/photo-antifrizz-coconut-oil-hair-serum_889056-4314.jpg?w=740',
    alt: "COCONUT OIL",
    name: "COCONUT OIL",
    desc:
      "OIL",
    price: "30.50",
    type: "oil",
    button: "Add to Cart"
  },
  {
    id: 31,
    img: 'https://img.freepik.com/free-photo/olives-oil-bottle-with-spead-olives-leaves_23-2148285957.jpg?t=st=1716556062~exp=1716559662~hmac=cf8cf06722b6012fcc890aab2cc5bdfa8584a7ef50ac8eb89784968b85dd236f&w=900',
    alt: "OLIVE OIL",
    name: "OLIVE OIL",
    desc:
      "OIL",
    price: "25",
    type: "oil",
    button: "Add to Cart"
  }
];

export default productData;
