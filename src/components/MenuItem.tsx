import React from 'react';
import { motion } from 'framer-motion';
import type { MenuItem as MenuItemType } from '../data/menuData';
import { ChevronRight, Flame } from 'lucide-react';

interface MenuItemProps {
  item: MenuItemType;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onClick }) => {
  const getSpiceLevelColor = (level?: string) => {
    switch (level) {
      case 'Mild': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Hot': return 'bg-orange-500';
      case 'Extra Hot': return 'bg-red-500';
      default: return '';
    }
  };

  return (
    <motion.div
      whileHover={{ x: 10 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group cursor-pointer p-4 rounded-lg hover:bg-white/5 transition-colors duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-[#D4FF00] text-lg font-medium tracking-wide">
              {item.name}
            </h3>
            {item.isVegetarian && (
              <span className="px-2 py-0.5 text-xs bg-green-900 text-green-300 rounded">
                VEG
              </span>
            )}
          </div>
          <p className="text-gray-400 text-sm mt-1">{item.description}</p>
          <div className="flex items-center gap-4 mt-2">
            {item.spiceLevel && (
              <div className="flex items-center gap-1">
                <Flame size={16} className={`${getSpiceLevelColor(item.spiceLevel)}`} />
                <span className="text-xs text-gray-500">{item.spiceLevel}</span>
              </div>
            )}
            <span className="text-[#FF3C3C] font-medium">{item.price}</span>
            <ChevronRight 
              size={20} 
              className="text-gray-600 group-hover:text-[#D4FF00] transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItem;