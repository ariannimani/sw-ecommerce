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
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const CURRENCIES = gql`
  query FetchCurrencies {
    currencies {
      label
      symbol
    }
  }
`;
