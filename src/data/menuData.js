// src/data/menuData.js
const menuItems = [
  // Build Your Own Section
  {
    id: 'byo',
    name: 'Build Your Own',
    category: 'Build Your Own',
    subsections: [
      {
        id: 'byo-size',
        name: 'Size',
        options: [
          { id: 'size-16', name: '16oz' },
          { id: 'size-24', name: '24oz' }
        ]
      },
      {
        id: 'byo-base',
        name: 'Base',
        options: [
          { id: 'base-coffee', name: 'Coffee' },
          { id: 'base-lemonade', name: 'Lemonade' },
          { id: 'base-limeade', name: 'Limeade' },
          { id: 'base-black-tea', name: 'Black Tea' },
          { id: 'base-matcha', name: 'Matcha' },
          { id: 'base-chai', name: 'Chai' }
        ]
      },
      {
        id: 'byo-syrups',
        name: 'Syrups',
        options: [
          { id: 'syrup-fruity', name: 'Fruity' },
          { id: 'syrup-classics', name: 'Classics' },
          { id: 'syrup-seasonal', name: 'Seasonal' }
        ]
      },
      {
        id: 'byo-milk',
        name: 'Milk/Cream',
        options: [
          { id: 'milk-half-half', name: 'Half and Half' },
          { id: 'milk-heavy-cream', name: 'Heavy Cream' },
          { id: 'milk-oat', name: 'Oat Milk' },
          { id: 'milk-cold-foam', name: 'Cold Foam' }
        ]
      },
      {
        id: 'byo-toppings',
        name: 'Toppings',
        options: [
          { id: 'topping-whipped-cream', name: 'Whipped Cream' },
          { id: 'topping-cherry', name: 'Cherry' }
        ]
      }
    ]
  },

  // ---

  // Creative Combinations Section
  {
    id: 'creative',
    name: 'Creative Combinations',
    category: 'Creative Combinations',
    items: [
      {
        id: 'c-1',
        name: 'Creamy Lemonade',
      },
      {
        id: 'c-2',
        name: 'Shirley Temple Lemonade',
      },
      {
        id: 'c-3',
        name: 'Sparkling Lemonade',
      }
    ]
  },

  // ---

  // The Classics Section
  {
    id: 'classics',
    name: 'The Classics',
    category: 'The Classics',
    items: [
      {
        id: 'cl-1',
        name: 'White Choc, Brown Sugar, Cinnamon Iced Coffee',
      },
      {
        id: 'cl-2',
        name: 'Maple, Salted Caramel Latte',
      },
      {
        id: 'cl-3',
        name: 'Banana Chai',
      },
      {
        id: 'cl-4',
        name: 'Pina Colada Limeade',
      },
      {
        id: 'cl-5',
        name: 'Strawberry Lemonade',
      },
      {
        id: 'cl-6',
        name: 'Lavender Blueberry Lemonade',
      }
    ]
  }
];

export default menuItems;