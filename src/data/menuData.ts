export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  longDescription?: string;
  image: string;
  spiceLevel?: 'Mild' | 'Medium' | 'Hot' | 'Extra Hot';
  ingredients?: string[];
  isVegetarian?: boolean;
}

interface MenuData {
  [category: string]: MenuItem[];
}

const menuData: MenuData = {
  "Steam Momos": [
    {
      id: "steam-1",
      name: "Classic Veg Momos",
      price: "₹99",
      description: "Garden-fresh vegetables, ginger, garlic",
      longDescription: "Handcrafted dumplings filled with fresh seasonal vegetables, aromatic ginger, and garlic. Served with our signature red chili sauce.",
      image: "https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg",
      spiceLevel: "Mild",
      ingredients: ["Cabbage", "Carrots", "Green Onions", "Ginger", "Garlic"],
      isVegetarian: true
    },
    {
      id: "steam-2",
      name: "Chicken & Herbs",
      price: "₹129",
      description: "Minced chicken, fresh herbs, spring onions",
      longDescription: "Succulent minced chicken mixed with aromatic herbs and spring onions. Our bestseller.",
      image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg",
      spiceLevel: "Medium",
      ingredients: ["Chicken", "Mixed Herbs", "Spring Onions", "Garlic", "Black Pepper"]
    }
  ],
  "Tandoori Momos": [
    {
      id: "tandoor-1",
      name: "Tandoori Paneer",
      price: "₹149",
      description: "Chargrilled cottage cheese momos",
      longDescription: "Momos stuffed with spiced paneer, grilled in our tandoor. Served with mint chutney.",
      image: "https://images.pexels.com/photos/6941017/pexels-photo-6941017.jpeg",
      spiceLevel: "Hot",
      ingredients: ["Paneer", "Tandoori Spices", "Bell Peppers", "Onions"],
      isVegetarian: true
    }
  ],
  "Chef's Specials": [
    {
      id: "special-1",
      name: "Dragon Fire Momos",
      price: "₹179",
      description: "Spicy chicken, schezwan sauce",
      longDescription: "Our signature spicy chicken momos tossed in house-made schezwan sauce. Not for the faint-hearted!",
      image: "https://images.pexels.com/photos/5560758/pexels-photo-5560758.jpeg",
      spiceLevel: "Extra Hot",
      ingredients: ["Chicken", "Schezwan Sauce", "Dried Red Chilies", "Garlic"]
    }
  ],
  "Beverages": [
    {
      id: "bev-1",
      name: "Masala Chai",
      price: "₹49",
      description: "Indian spiced tea",
      longDescription: "Traditional Indian tea brewed with aromatic spices and herbs.",
      image: "https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg"
    }
  ]
};

export default menuData;