import React from 'react';
import ProductCard from './ProductCard';
import TrendingProducts from './TrendingProducts';
import SuggestedProducts from './SuggestedProducts';
import p1 from '../Assets/p1.png';
import p2 from '../Assets/p2.png';
import p3 from '../Assets/p3.png';
import p4 from '../Assets/p4.png';
import p5 from '../Assets/p5.png';
import p6 from '../Assets/p6.png';
import p7 from '../Assets/p7.png';
import p8 from '../Assets/p8.png';

const ProductSection = () => {
  return (
    <div className="featured-section container">
      <div className="row">
        <ProductCard imageSrc={p1} title="Salt Spray Chamber" description="" />
        <ProductCard imageSrc={p2} title="Salt Spray Chamber" description="" />
        <ProductCard imageSrc={p3} title="Salt Spray Chamber" description="" />
        <ProductCard imageSrc={p4} title="Salt Spray Chamber" description="" />
        <ProductCard imageSrc={p5} title="Salt Spray Chamber" description="" />
        <ProductCard imageSrc={p6} title="Salt Spray Chamber" description="" />
        <ProductCard imageSrc={p7} title="Salt Spray Chamber" description="" />
        <ProductCard imageSrc={p8} title="Salt Spray Chamber" description="" />
      </div>

      {/* Add Trending Products Section */}
      <TrendingProducts />

      {/* Add Suggested Products Section */}
      <SuggestedProducts />
    </div>
  );
};

export default ProductSection;
