const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb+srv://kunaloberoi2010:Qwertyuiop@cluster0.bces9mj.mongodb.net/e-commerce");

// Product schema
const Product = mongoose.model("Product", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number },
  old_price: { type: Number },
  date: { type: Date, default: Date.now },
  avilable: { type: Boolean, default: true },
});

// Sample product data using frontend assets
const sampleProducts = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_1.png",
    category: "women",
    new_price: 50,
    old_price: 80,
    avilable: true
  },
  {
    id: 2,
    name: "Men Green Solid Zipfront Relaxed Fit Jacket",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_2.png",
    category: "men",
    new_price: 85,
    old_price: 120,
    avilable: true
  },
  {
    id: 3,
    name: "Men Green Solid Zipfront Relaxed Fit Jacket",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_3.png",
    category: "men",
    new_price: 60,
    old_price: 100,
    avilable: true
  },
  {
    id: 4,
    name: "Men Green Solid Zipfront Relaxed Fit Jacket",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_4.png",
    category: "men",
    new_price: 100,
    old_price: 150,
    avilable: true
  },
  {
    id: 5,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_5.png",
    category: "women",
    new_price: 85,
    old_price: 120,
    avilable: true
  },
  {
    id: 6,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_6.png",
    category: "women",
    new_price: 85,
    old_price: 120,
    avilable: true
  },
  {
    id: 7,
    name: "Men Green Solid Zipfront Relaxed Fit Jacket",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_7.png",
    category: "men",
    new_price: 85,
    old_price: 120,
    avilable: true
  },
  {
    id: 8,
    name: "Men Green Solid Zipfront Relaxed Fit Jacket",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_8.png",
    category: "men",
    new_price: 85,
    old_price: 120,
    avilable: true
  },
  {
    id: 9,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_9.png",
    category: "women",
    new_price: 85,
    old_price: 120,
    avilable: true
  },
  {
    id: 10,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_10.png",
    category: "women",
    new_price: 85,
    old_price: 120,
    avilable: true
  },
  {
    id: 11,
    name: "Men Green Solid Zipfront Relaxed Fit Jacket",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_11.png",
    category: "men",
    new_price: 85,
    old_price: 120,
    avilable: true
  },
  {
    id: 12,
    name: "Men Green Solid Zipfront Relaxed Fit Jacket",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_12.png",
    category: "men",
    new_price: 85,
    old_price: 120,
    avilable: true
  },
  {
    id: 13,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_13.png",
    category: "kid",
    new_price: 85,
    old_price: 120,
    avilable: true
  },
  {
    id: 14,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_14.png",
    category: "kid",
    new_price: 85,
    old_price: 120,
    avilable: true
  },
  {
    id: 15,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_15.png",
    category: "kid",
    new_price: 85,
    old_price: 120,
    avilable: true
  },
  {
    id: 16,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_16.png",
    category: "kid",
    new_price: 85,
    old_price: 120,
    avilable: true
  },
  {
    id: 17,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_17.png",
    category: "kid",
    new_price: 85,
    old_price: 120,
    avilable: true
  },
  {
    id: 18,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_18.png",
    category: "kid",
    new_price: 85,
    old_price: 120,
    avilable: true
  },
  {
    id: 19,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_19.png",
    category: "women",
    new_price: 85,
    old_price: 120,
    avilable: true
  },
  {
    id: 20,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    image: "/images/product_20.png",
    category: "women",
    new_price: 85,
    old_price: 120,
    avilable: true
  }
];

async function populateDatabase() {
  try {
    // Clear existing products
    await Product.deleteMany({});
    console.log("Cleared existing products");
    
    // Insert sample products
    for (const productData of sampleProducts) {
      const product = new Product(productData);
      await product.save();
      console.log(`Added product: ${product.name}`);
    }
    
    console.log("Database populated with sample products");
    process.exit(0);
  } catch (error) {
    console.error("Error populating database:", error);
    process.exit(1);
  }
}

populateDatabase();
