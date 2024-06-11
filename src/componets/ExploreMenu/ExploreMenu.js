import React from 'react';
import styles from './ExploreMenu.module.css';
import { menu_list } from '../../frontend_assets/assets';

export default function ExploreMenu({ category, setCategory }) {
  return (
    <div className={styles.exploreMenu} id='exploreMenu'>
      <h1>Explore our menu</h1>
      <p className={styles.explore_menu_text}>
        Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise, one delicious meal at a time.
      </p>
      <div className={styles.ExploreMenu_list}>
        {menu_list.map((item, index) => {
          return (
            <div 
              onClick={() => setCategory(prev => (prev === item.menu_name ? 'All' : item.menu_name))} 
              key={index} 
              className={styles.ExploreMenu_item}
            >
              <img 
                className={category === item.menu_name ? styles.active : ''} 
                src={item.menu_image} 
                alt={item.menu_name} 
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
