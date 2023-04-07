import { useState } from "react";
import { Table } from 'react-bootstrap';
import { ArrowUp, ArrowDown } from 'react-bootstrap-icons';
import React from 'react';

export function PersonsList({ list }) {
  const [sortedKey, setSortedKey] = useState(null);
  const [sortDirection, setSortDirection] = useState('inc');
  const [filterExpr, setFilterExpr] = useState('')

  const keys = Object.keys(list[0]);

  let sortedList = [...list];

  const specChar = ['[', ']', '\\', '^', '$', '.', '|', '?', '+', '(', ')'];

  const makeCheck = (expr) => {
    let newExpr = expr;
    newExpr = expr.split('')
      .map((symb) => {
        if (specChar.includes(symb)) {
          symb = `\\${symb}`;
        }
        if (symb === '*') {
          symb = '.+'
        }
        return symb;
      })
      .join('');
    return newExpr;
  }

  if (filterExpr) {
    const isContainsExpr = (item) => {
      const valuesArr = Object.values(item);
      const re = new RegExp(makeCheck(filterExpr), 'i');
      for (let i = 0; i < valuesArr.length; i += 1) {
        const normalizedVal = valuesArr[i].toString();
        if (normalizedVal.search(re) >= 0) {
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
        sortedList.sort((item1, item2) => item1[sortedKey] >= item2[sortedKey] ? 1 : -1);
        break;
      case 'dec':
        sortedList.sort((item1, item2) => item1[sortedKey] >= item2[sortedKey] ? -1 : 1);
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

  const setArrow = (key) => {
    let arrow = null;
    if (sortedKey !== key) {
      return arrow;
    }
    switch (sortDirection) {
      case 'inc':
        arrow = <ArrowDown />;
        break;
      case 'dec':
        arrow = <ArrowUp />
        break;
      default:
        break;
    }
    return arrow;
  }

  return (
    <>
      <label forhtml="search">Искать: </label>
      <br />
      <input id="search" placeholder="Зима близко ..." onChange={(e) => setFilterExpr(e.target.value)} />
      <Table striped bordered hover>
        <thead>
          <tr>
            {keys.map((key) => <th key={key} onClick={() => { setStates(key) }}>{key}{setArrow(key)}</th>)}
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