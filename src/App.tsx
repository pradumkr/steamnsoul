import React, { useState } from 'react';
import { motion } from 'framer-motion';
import menuData, { MenuItem } from './data/menuData';
import MenuSection from './components/MenuSection';
import ItemModal from './components/ItemModal';
import watermarkImg from './assets/SandSLogo.jpg';

function App() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Image with Blur */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg"
          alt="Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      </div>

      {/* Watermark */}
      <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none">
        <img
          src={watermarkImg}
          alt="Watermark"
          className="w-120 h-120 opacity-10"
        />
        {/* <h1 className="text-[20vw] font-bold text-white/5 rotate-[-20deg] select-none">
          S&S
        </h1> */}
      </div>

      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-4xl mx-auto px-4 py-12"
      >
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-spartan text-[#D4FF00] mb-2">
            <div className='text-[#FFFFFF] inline'>stea</div>
            <div className='text-[#D4FF00] inline'>m</div>
            <div className='text-[#B0CC26] inline'>&</div>
            <div className='text-[#D4FF00] inline'>soul</div>
          </h1>
          <p className="text-[#FFF7E1] font-bebas">A DELICIOUS MOMO OUTLET NEAR YOU!</p>
        </header>

        {Object.entries(menuData).map(([category, items]) => (
          <MenuSection
            key={category}
            title={category}
            items={items}
            onItemClick={handleItemClick}
          />
        ))}
      </motion.main>

      <ItemModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;