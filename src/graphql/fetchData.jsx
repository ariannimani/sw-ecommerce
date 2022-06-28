import client from "./connection";
import {
  CATEGORY_DATA,
  CURRENCIES,
  PRODUCTS_DATA_BY_CATEGORY,
  PRODUCTS_DATA_BY_ID,
} from "./queries";

export const fetchProductsByCategory = async (category) => {
  return client.query({
    query: PRODUCTS_DATA_BY_CATEGORY,
    variables: {
      //"all"
      title: category,
    },
  });
};

export const fetchCategories = async () => {
  return client.query({
    query: CATEGORY_DATA,
  });
};

export const fetchCurrency = async () => {
  return client.query({
    query: CURRENCIES,
  });
};

export const fetchProductsById = async (id) => {
  return client.query({
    query: PRODUCTS_DATA_BY_ID,
    variables: { id },
    //{ id },
  });
};
