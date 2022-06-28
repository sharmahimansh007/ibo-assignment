const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

// one function to count unique products 

const getUniqueProductCount = (listOfProducts) => {

  let productsObj = {};


  for(let i=0; i<listOfProducts.length; i++){
  
      (productsObj[listOfProducts[i].productName]) ? productsObj[listOfProducts[i].productName] += 1 : productsObj[listOfProducts[i].productName] = 1    
      
  }
      
  console.log(productsObj);

}

getUniqueProductCount(listOfProducts);

console.log("---------------------------------------------------")

// second function to get unique products and their quantity 

const getUniquePrducts = (listOfProducts) => {

  const productsObj = {};

for (let product of listOfProducts) {

  (product.productName in productsObj) ? productsObj[product.productName].quantity += product.quantity : productsObj[product.productName] = { ...product };
      
}

console.log(productsObj)

}

getUniquePrducts(listOfProducts)










