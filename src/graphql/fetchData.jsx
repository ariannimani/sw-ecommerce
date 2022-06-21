import client from "./connection";
import {
  CATEGORY_DATA,
  CURRENCIES,
  PRODUCTS_DATA_BY_CATEGORY,
} from "./queries";

export const fetchProductsByCategory = async (category) => {
  return client.query({
    query: PRODUCTS_DATA_BY_CATEGORY,
    variables: { title: "all" },
    //category },
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
