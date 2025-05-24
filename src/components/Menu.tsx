import React, { useState } from 'react';
import menuData, { MenuItem } from '../data/menuData';
import MenuItemCard from './MenuItemCard';
import ItemModal from './ItemModal';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(Object.keys(menuData)[0]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const categories = Object.keys(menuData);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto" id="menu">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins mb-2">Our Menu</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our wide variety of handcrafted momos, prepared with love and the finest ingredients.
        </p>
      </div>
      
      {/* Category Tabs */}
      <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide">
        <div className="flex space-x-2 mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium whitespace-nowrap transition-colors duration-300 ${
                activeCategory === category 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {menuData[activeCategory].map((item) => (
          <MenuItemCard 
            key={item.id}
            item={item}
            onClick={() => handleItemClick(item)}
          />
        ))}
      </div>
      
      {/* Item Details Modal */}
      <ItemModal 
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Menu;