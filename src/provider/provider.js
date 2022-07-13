import React, { useReducer, useContext, useMemo } from "react";
import { initialState, reducer } from "../reducer";
import PropTypes from "prop-types";

export const Context = React.createContext();

const Provider = ({ children, location }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState || {},
  );

  const value = useMemo(() => {
    return {
      state,
      dispatch
    };
  }, [state]);

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProvider = () => useContext(Context);
export default Provider;
