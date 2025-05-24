import React from 'react';
import MenuItem from './MenuItem';
import type { MenuItem as MenuItemType } from '../data/menuData';

interface MenuSectionProps {
  title: string;
  items: MenuItemType[];
  onItemClick: (item: MenuItemType) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items, onItemClick }) => {
  return (
    <section className="mb-12">
      <h2 className="text-white text-2xl font-bold mb-6 pb-2 border-b border-white/10">
        {title}
      </h2>
      <div className="space-y-2">
        {items.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onClick={() => onItemClick(item)}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;