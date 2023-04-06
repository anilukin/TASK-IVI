import { PersonsList } from "./Components/PersonsList.jsx";
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

const persons = [
  {
    id: 1,
    name: 'Эддард',
    secondName: 'Рикардович',
    sername: 'Старк',
    age: 35,
    height: 179,
    weight: 86,
  },
  {
    id: 2,
    name: 'Кейтилин',
    secondName: 'Хостеровна',
    sername: 'Старк',
    age: 34,
    height: 165,
    weight: 61,
  },
  {
    id: 3,
    name: 'Джон',
    secondName: 'Недович',
    sername: 'Сноу',
    age: 14,
    height: 173,
    weight: 63,
  },
  {
    id: 4,
    name: 'Тирион',
    secondName: 'Тайвинович',
    sername: 'Ланнистер',
    age: 31,
    height: 135,
    weight: 45,
  },
  {
    id: 5,
    name: 'Серсея',
    secondName: 'Тайвиновна',
    sername: 'Ланнистер',
    age: 32,
    height: 166,
    weight: 53,
  },
  {
    id: 6,
    name: 'Дайенерис',
    secondName: 'Эйрисовна',
    sername: 'Таргариен',
    age: 13,
    height: 160,
    weight: 50,
  },
  {
    id: 7,
    name: 'Арья',
    secondName: 'Недовна',
    sername: 'Старк',
    age: 9,
    height: 155,
    weight: 45,
  },
  {
    id: 8,
    name: 'Роберт',
    secondName: 'Штефонович',
    sername: 'Баратеон',
    age: 35,
    height: 180,
    weight: 90,
  },
  {
    id: 9,
    name: 'Сандор',
    secondName: 'Клиганович',
    sername: 'Клиган',
    age: 29,
    height: 198,
    weight: 102,
  },
  {
    id: 10,
    name: 'Эймон',
    secondName: 'Мейкарович',
    sername: 'Таргариен',
    age: 99,
    height: 183,
    weight: 76,
  },
]

function App() {
  return <PersonsList list={persons} />;
}

export default App;
