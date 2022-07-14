import { API, graphqlOperation } from "aws-amplify";
import { listCustomers } from "../graphql/queries";

export const fetchCustomers = async () => {
  try {
    const customersData = await API.graphql(graphqlOperation(listCustomers));
    const customerList = customersData.data.listCustomers.items
    return customerList;
  } catch (error) {
    console.log(error);
  }
}