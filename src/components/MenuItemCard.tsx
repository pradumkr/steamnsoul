import React from 'react';
import { MenuItem } from '../data/menuData';

interface MenuItemCardProps {
  item: MenuItem;
  onClick: () => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 font-poppins line-clamp-1">{item.name}</h3>
          <span className="text-orange-600 font-medium">{item.price}</span>
        </div>
        
        <div className="flex items-center mt-2">
          <SpiceLevelIndicator level={item.spiceLevel} />
        </div>
      </div>
    </div>
  );
};

const SpiceLevelIndicator: React.FC<{ level: string }> = ({ level }) => {
  let color = "bg-green-500";
  let dots = 1;
  
  switch (level) {
    case "Mild":
      color = "bg-green-500";
      dots = 1;
      break;
    case "Medium":
      color = "bg-yellow-500";
      dots = 2;
      break;
    case "Hot":
      color = "bg-orange-500";
      dots = 3;
      break;
    case "Extra Hot":
      color = "bg-red-600";
      dots = 4;
      break;
  }
  
  return (
    <div className="flex items-center space-x-1">
      <span className="text-xs text-gray-600">{level}</span>
      <div className="flex space-x-1 ml-2">
        {[...Array(dots)].map((_, i) => (
          <div key={i} className={`${color} h-2 w-2 rounded-full`}></div>
        ))}
      </div>
    </div>
  );
};

export default MenuItemCard;