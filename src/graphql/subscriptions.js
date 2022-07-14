/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateOportunity = /* GraphQL */ `
  subscription OnCreateOportunity {
    onCreateOportunity {
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
export const onUpdateOportunity = /* GraphQL */ `
  subscription OnUpdateOportunity {
    onUpdateOportunity {
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
export const onDeleteOportunity = /* GraphQL */ `
  subscription OnDeleteOportunity {
    onDeleteOportunity {
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
