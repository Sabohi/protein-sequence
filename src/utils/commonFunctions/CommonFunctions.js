/**
 * @summary Common Functions.
 * @description Contains all the common functions used in the app.
 * @file This file defines all the common functions used throughout the app.
 * @author Sabohi Zaidi
 */

import _ from 'lodash';

/**
 * @summary URL formatter.
 * @description gives a URL for GET API with embeded params.
 * @param {string} baseUrl The base url
 * @param {Object} paramObj Contains the parameter to be embedded with the url
 * @return {string} Returns the final url after embedding the paramaters specified.
 */
export const getUrl = (baseUrl, paramObj) => {
  let url = '';
  if (!_.isEmpty(paramObj)) {
    url = `${baseUrl}?`;
    const paramKeyArray = Object.keys(paramObj);
    const { length } = paramKeyArray;
    paramKeyArray.forEach((key, index) => {
      url = `${url + key}=${paramObj[key]}`;
      if (index !== length - 1) {
        url += '&';
      }
    });
  } else {
    url = baseUrl;
  }
  return url;
};

/**
 * @summary Equality wrapper function on top of lodash.
 * Performs a deep comparison between two values to determine if they are equivalent.
 * @description This method supports comparision.
 * Functions and DOM nodes are not supported.
 * @param {any} param1 The data to be compared.
 * @param {any} param2 The other value to compare.
 * @return {boolean} Returns true if the values are equivalent, else false.
 */

export const equalityChecker = (param1, param2) => _.isEqual(param1, param2);

/**
 * @summary Check Empty wrapper function on top of lodash.
 * Performs a length check on given Object or array.
 * @description Checks if value is empty. 
 * @param {any} param1 The data to be checked.
 * @return {boolean} Returns true if the it's not empty, else false.
 */

export const checkEmpty = (param1) => {
  const isNum = !Number.isNaN(Number(param1));
  if (param1 === null || param1 === undefined) return true;

  if (isNum && Number(param1) > 0) return false;

  if (isNum && Number(param1) <= 0) return true;

  return _.isEmpty(param1);
};

export const sagaError = (actionError) => actionError || {};
