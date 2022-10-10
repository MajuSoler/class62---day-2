import "./App.css";

import FruitCard from "./components/FruitCard";

function App() {
  const fruit = [
    {
      name: "Apple",
      id: 6,
      healthy: true,
      order: "Rosales",
      nutritions: {
        carbohydrates: 11.4,
        protein: 0.3,
        fat: 0.4,
        calories: 52,
        sugar: 10.3,
      },
    },
    {
      name: "Apricot",
      id: 35,
      healthy: true,
      order: "Rosales",
      nutritions: {
        carbohydrates: 3.9,
        protein: 0.5,
        fat: 0.1,
        calories: 15,
        sugar: 3.2,
      },
    },
    {
      name: "Banana",
      id: 1,
      healthy: false,
      order: "Zingiberales",
      nutritions: {
        carbohydrates: 22,
        protein: 1,
        fat: 0.2,
        calories: 96,
        sugar: 17.2,
      },
    },
    {
      name: "Blackberry",
      id: 64,
      healthy: true,
      order: "Rosales",
      nutritions: {
        carbohydrates: 9,
        protein: 1.3,
        fat: 0.4,
        calories: 40,
        sugar: 4.5,
      },
    },
    {
      name: "Blueberry",
      id: 33,
      healthy: true,
      order: "Rosales",
      nutritions: {
        carbohydrates: 5.5,
        protein: 0,
        fat: 0.4,
        calories: 29,
        sugar: 5.4,
      },
    },
    {
      name: "Cherry",
      id: 9,
      healthy: false,
      order: "None",
      nutritions: {
        carbohydrates: 12,
        protein: 1,
        fat: 0.3,
        calories: 50,
        sugar: 8,
      },
    },
    {
      name: "Durian",
      id: 60,
      healthy: false,
      order: "Malvales",
      nutritions: {
        carbohydrates: 27.1,
        protein: 1.5,
        fat: 5.3,
        calories: 147,
        sugar: 6.75,
      },
    },
    {
      name: "Fig",
      healthy: true,
      id: 68,
      order: "Rosales",
      nutritions: {
        carbohydrates: 19,
        protein: 0.8,
        fat: 0.3,
        calories: 74,
        sugar: 16,
      },
    },
  ];

  return (
    <div className="App">
      <h1>Buy delicious fruits!</h1>
      <div>
        {fruit.map((fruit) =>
          fruit.healthy ? (
            <FruitCard
              key={fruit.id}
              name={fruit.name}
              order={fruit.order}
              nutritions={fruit.nutritions}
            />
          ) : (
            <div key={fruit.id}>Not healthy</div>
          )
        )}
      </div>
    </div>
  );
}

export default App;
