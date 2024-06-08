// src/components/Menu.jsx
import React from 'react';
import dish1 from '../images/logo2.jpg'; // Replace with your own image paths
import dish2 from '../images/logo3.jpg';
import dish3 from '../images/logo4.jpg';

const Menu = () => {
  const dishes = [
    { id: 1, name: 'Dish 1', description: 'Delicious dish 1', image: dish1, price: '$15' },
    { id: 2, name: 'Dish 2', description: 'Tasty dish 2', image: dish2, price: '$20' },
    { id: 3, name: 'Dish 3', description: 'Yummy dish 3', image: dish3, price: '$25' },
  ];

  return (
    <section id="menu" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Menu</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Explore our delicious and diverse menu, crafted with the finest ingredients.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <div key={dish.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={dish.image} alt={dish.name} className="w-full h-56 object-cover object-center" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{dish.name}</h3>
                <p className="mt-2 text-gray-600">{dish.description}</p>
                <p className="mt-4 text-green-600 font-bold">{dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
