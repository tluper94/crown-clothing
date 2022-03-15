import { useState } from 'react';

import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

import categoriesData from './categories';

const Directory = () => {
  const [categories, setCategories] = useState(categoriesData);

  console.log(categories);

  return (
    <div className='categories-container'>
      {categories.map(({ id, ...otherCategoryProps }) => (
        <CategoryItem key={id} {...otherCategoryProps} />
      ))}
    </div>
  );
};

export default Directory;
