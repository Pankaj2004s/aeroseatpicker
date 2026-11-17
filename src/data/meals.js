export const MEALS = [
  { id: 'veg-sandwich', name: 'Veg Sandwich', type: 'veg', price: 0 },
  { id: 'fruit-bowl', name: 'Fresh Fruit Bowl', type: 'veg', price: 0 },
  { id: 'paneer-wrap', name: 'Paneer Tikka Wrap', type: 'veg', price: 250 },
  { id: 'dal-rice', name: 'Dal Makhani with Rice', type: 'veg', price: 350 },
  { id: 'chicken-sandwich', name: 'Grilled Chicken Sandwich', type: 'non-veg', price: 300 },
]

export const MEALS_BY_ID = Object.fromEntries(MEALS.map((meal) => [meal.id, meal]))
