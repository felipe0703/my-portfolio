import React from "react";
import firebase, { FirebaseContext } from "../../firebase";
import { AppRouter } from "./AppRouter";

export const MainScreen = () => {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <AppRouter />
    </FirebaseContext.Provider>
  );
};
