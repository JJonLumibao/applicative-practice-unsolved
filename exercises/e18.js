/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy } from "./e17";

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  let yearCounter = {};
  let yearArray = [];
  for(let asteroid of data.asteroids) {
    let year = asteroid.discoveryYear;
    yearCounter[year] = (yearCounter[year] || 0) + 1;
  }
  for(let year of Object.keys(yearCounter)) {
    yearArray.push({
      year: year,
      count: yearCounter[year]
    });
  }
  return parseInt((maxBy(yearArray, key => key.count)).year);
  
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
