// @opencerta/essentials
// Copyright (C) 2020 OpenCerta
//
// This library is free software; you can redistribute it and/or
// modify it under the terms of the GNU Lesser General Public
// License as published by the Free Software Foundation; either
// version 3.0 of the License, or (at your option) any later version.
//
// This library is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA

import { Operator } from 'json-rules-engine';

const startsWith = new Operator('startsWith', (factValue: string, jsonValue: string) => {
  if (!factValue || !factValue.length) return false;
  const jsonValueLength = jsonValue.length;
  return factValue.slice(0, jsonValueLength).toLowerCase() === jsonValue.toLowerCase();
});

const endsWith = new Operator('endsWith', (factValue: string, jsonValue: string) => {
  if (!factValue || !factValue.length) return false;
  const jsonValueLength = jsonValue.length;
  return factValue.slice(-1 * jsonValueLength).toLowerCase() === jsonValue.toLowerCase();
});

const elapsedTimeGreaterThan = new Operator('elapsedTimeGreaterThan', (factValue: string, jsonValue: number) => {
  if (!factValue) return false;
  const date = new Date(factValue);
  const dateInMs = date.getTime();
  const presentDateInMs = Date.now();
  return presentDateInMs - dateInMs > jsonValue;
});

const remainingTimeLessThan = new Operator('remainingTimeLessThan', (factValue: string, jsonValue: number) => {
  if (!factValue) return false;
  const date = new Date(factValue);
  const dateInMs = date.getTime();
  const presentDateInMs = Date.now();
  return dateInMs - presentDateInMs < jsonValue;
});

const remainingTimeGreaterThan = new Operator('remainingTimeGreaterThan', (factValue: string, jsonValue: number) => {
  if (!factValue) return false;
  const date = new Date(factValue);
  const dateInMs = date.getTime();
  const presentDateInMs = Date.now();
  return dateInMs - presentDateInMs > jsonValue;
});

const elapsedTimeLessThan = new Operator('elapsedTimeLessThan', (factValue: string, jsonValue: number) => {
  if (!factValue) return false;
  const date = new Date(factValue);
  const dateInMs = date.getTime();
  const presentDateInMs = Date.now();
  return presentDateInMs - dateInMs < jsonValue;
});

const customEqual = new Operator('customEqual', (factValue: unknown, jsonValue: unknown) => {
  if (!factValue) return false;
  return factValue == jsonValue;
});

const customNotEqual = new Operator('customNotEqual', (factValue: unknown, jsonValue: unknown) => {
  if (!factValue) return false;
  return factValue != jsonValue;
});

const customOperators = [
  startsWith,
  endsWith,
  elapsedTimeGreaterThan,
  remainingTimeLessThan,
  remainingTimeGreaterThan,
  elapsedTimeLessThan,
  customEqual,
  customNotEqual
];

export default customOperators;
