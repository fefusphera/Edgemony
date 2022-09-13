export const ENDPOINTS = {
  BASE: `https://www.themealdb.com/api/json/v1/1`,
  get SEARCH() {
    return `${this.BASE}/search.php`;
  },
  get FILTER() {
    return `${this.BASE}/filter.php`;
  },
  get CATEGORIES() {
    return `${this.BASE}/categories.php`;
  },
};

//---DOCUMENTAZIONE MEAL DB

// Search meal by name
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

//BASE + / + SEARCH.PHP + ?s={nome piatto}

// Filter by Category
// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

//BASE + / + FILTER.PHP + ?i={nome main ingredient}

// List all meal categories
// www.themealdb.com/api/json/v1/1/categories.php

//BASE + /CATEGORIES.PHP
