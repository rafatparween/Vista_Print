import React from 'react';

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-16 h-[800px]">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center mt-[180px]">Why Choose Uzair graphic & printing?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <div className="flex flex-col items-center text-center">
          <div className="text-blue-600 text-6xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Designs</h3>
          <p className="text-gray-700">Create personalized designs that reflect your brand’s identity with our easy-to-use design tools.</p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="text-blue-600 text-6xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
          <p className="text-gray-700">Get your products quickly with our efficient production and shipping services.</p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="text-blue-600 text-6xl mb-4">🏆</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">High-Quality Printing</h3>
          <p className="text-gray-700">Enjoy superior print quality that ensures your products stand out.</p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <div className="text-blue-600 text-6xl mb-4">📦</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Wide Range of Products</h3>
          <p className="text-gray-700">Choose from a vast selection of products to suit every need, from business cards to promotional items.</p>
        </div>
      </div>
    </div>
  );
}
