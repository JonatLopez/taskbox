/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createOportunity = /* GraphQL */ `
  mutation CreateOportunity(
    $input: CreateOportunityInput!
    $condition: ModelOportunityConditionInput
  ) {
    createOportunity(input: $input, condition: $condition) {
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
export const updateOportunity = /* GraphQL */ `
  mutation UpdateOportunity(
    $input: UpdateOportunityInput!
    $condition: ModelOportunityConditionInput
  ) {
    updateOportunity(input: $input, condition: $condition) {
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
export const deleteOportunity = /* GraphQL */ `
  mutation DeleteOportunity(
    $input: DeleteOportunityInput!
    $condition: ModelOportunityConditionInput
  ) {
    deleteOportunity(input: $input, condition: $condition) {
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
