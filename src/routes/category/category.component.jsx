import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../component/product-card/product-card.component';

import { CategoriesContext } from '../../context/categories.context';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoryMap } = useContext(CategoriesContext);
  const [products, setPoducts] = useState(categoryMap[category]);

  useEffect(() => {
    setPoducts(categoryMap[category]);
  }, [category, categoryMap]);

  return (
    <div className='category-page-container'>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
