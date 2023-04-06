import { useState } from "react";
import { Table } from 'react-bootstrap';
import React from 'react';

export function PersonsList({ list }) {
  const [sortedKey, setSortedKey] = useState(null);
  const [sortDirection, setSortDirection] = useState('inc');
  const [filterExpr, setFilterExpr] = useState('')

  const keys = Object.keys(list[0]);

  let sortedList = [...list];

  if (filterExpr) {
    const isContainsExpr = (item) => {
      const valuesArr = Object.values(item);
      for (let i = 0; i < valuesArr.length; i += 1) {
        const normalizedVal = valuesArr[i].toString().toLowerCase()
        if (normalizedVal.includes(filterExpr)) {
          return true;
        };
      }
      return false;
    };
    sortedList = sortedList.filter((item) => isContainsExpr(item));
  }

  if (sortedKey) {
    switch (sortDirection) {
      case 'inc':
        sortedList.sort((item1, item2) => item1[sortedKey] > item2[sortedKey] ? 1 : -1);
        break;
      case 'dec':
        sortedList.sort((item1, item2) => item1[sortedKey] > item2[sortedKey] ? -1 : 1);
        break;
      default:
        break;
    }
  }

  const getNewSortDirection = (dir) => {
    switch (dir) {
      case 'inc':
        return 'dec';
      case 'dec':
        return null;
      default:
        return 'inc';
    }
  };

  const setStates = (key) => {
    if (key === sortedKey) {
      setSortDirection(getNewSortDirection(sortDirection));
      return;
    }
    setSortedKey(key);
  };

  return (
    <>
      <input onChange={(e) => setFilterExpr(e.target.value.toLowerCase())} />
      <Table striped bordered hover>
        <thead>
          <tr>
            {keys.map((key) => <th key={key} onClick={() => { setStates(key) }}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {sortedList.map((item, ind) => (
            <tr key={`tr-${ind}`}>
              {keys.map((key, i) => <td key={`td-${ind}-${i}`}>{item[key]}</td>)}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}