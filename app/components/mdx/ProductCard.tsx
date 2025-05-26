'use client';

import React, { useState } from 'react';
import { IoCheckmarkCircle } from "react-icons/io5";
import { productsData } from './ProductData';

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  isActive: boolean;
  onClick: () => void;
  isComingSoon?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  icon, 
  title, 
  subtitle, 
  isActive, 
  onClick, 
  isComingSoon 
}) => (
  <div
    onClick={!isComingSoon ? onClick : undefined}
    className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer ${
      isComingSoon 
        ? 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 cursor-not-allowed opacity-60' 
        : isActive 
          ? 'border-blue-600 bg-blue-50 dark:bg-blue-950/20 shadow-lg' 
          : 'border-gray-200 hover:border-gray-300 hover:shadow-md bg-white dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600'
    }`}
  >
    {isActive && !isComingSoon && (
      <div className="absolute top-2 right-2 text-blue-600">
        <IoCheckmarkCircle size="1.2rem" />
      </div>
    )}
    <div className={`mb-2 ${isActive && !isComingSoon ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}>
      {icon}
    </div>
    <h3 className={`font-bold text-base mb-1 ${isActive && !isComingSoon ? 'text-blue-900 dark:text-blue-100' : 'text-gray-900 dark:text-gray-100'}`}>
      {title}
    </h3>
    <p className="text-xs text-gray-600 dark:text-gray-400">{subtitle}</p>
    {isComingSoon && (
      <div className="mt-1 text-xs text-gray-500 font-medium">Coming Soon</div>
    )}
  </div>
);

const ProductsToggle: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState('sdk');
  const currentProduct = productsData.find(p => p.id === activeProduct);

  return (
    <div className="my-6 not-prose">
      {/* Product Toggle Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-8">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            icon={product.icon}
            title={product.title}
            subtitle={product.subtitle}
            isActive={activeProduct === product.id}
            isComingSoon={product.isComingSoon}
            onClick={() => setActiveProduct(product.id)}
          />
        ))}
      </div>

      {/* Product Details */}
      {currentProduct && currentProduct.content && (
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-blue-600 dark:text-blue-400 flex-shrink-0">{currentProduct.icon}</div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{currentProduct.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{currentProduct.subtitle}</p>
            </div>
          </div>
          
          <div className="border-t dark:border-gray-800 pt-4">
            {currentProduct.content}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsToggle;