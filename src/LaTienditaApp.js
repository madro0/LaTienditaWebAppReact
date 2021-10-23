import React from "react";
import { Provider } from "react-redux";
import { store  } from './store/store';
import { AppRouter } from "./routers/AppRouter";
import { AuthContext } from "./context/AuthContext";

export const LaTienditaApp = () => {
  return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
  );
};
