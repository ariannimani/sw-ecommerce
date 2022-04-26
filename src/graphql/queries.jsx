import { gql } from "@apollo/client";

export const CATEGORY_DATA = gql`
  query FetchCategories {
    categories {
      name
    }
  }
`;

export const PRODUCTS_DATA_BY_CATEGORY = gql`
  query FetchProducts($title: String!) {
    category(input: { title: $title }) {
      products {
        name
        brand
        inStock
        description
        gallery
        category
        attributes {
          id
          name
          type
          items {
            id
            value
          }
        }
        id
        prices {
          currency
          amount
        }
      }
    }
  }
`;

export const CURRENCIES = gql`
  query FetchCurrencies {
    currencies
  }
`;

export const PRODUCTS_DATA_BY_ID = gql`
  query FetchProductById($id: id) {
    product(id: $id) {
      id
      name
      inStock
      brand
      gallery
      description
      attributes {
        name
        id
        type
        items {
          id
          value
          displayValue
        }
      }
      prices {
        currency
        amount
      }
    }
  }
`;
