/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      name
      status
      created_at
      email
      phone
      oportinities {
        id
        name
        status
        customer {
          id
          name
          status
          created_at
          email
          phone
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        status
        created_at
        email
        phone
        oportinities {
          id
          name
          status
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOportunity = /* GraphQL */ `
  query GetOportunity($id: ID!) {
    getOportunity(id: $id) {
      id
      name
      status
      customer {
        id
        name
        status
        created_at
        email
        phone
        oportinities {
          id
          name
          status
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOportunities = /* GraphQL */ `
  query ListOportunities(
    $filter: ModelOportunityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOportunities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        status
        customer {
          id
          name
          status
          created_at
          email
          phone
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
