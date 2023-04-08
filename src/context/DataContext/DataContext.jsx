import React, { createContext, useReducer } from "react";

export const DataContext = createContext();

const initialState = {
  users: [],
  user: {},
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

const removeFav = (id, state) => {
  const newArr = state.favs.filter((fav) => fav.id !== id);
  localStorage.setItem("favs", JSON.stringify(newArr));
  return newArr;
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload };
    case "GET_USER":
      return { ...state, user: action.payload };
    case "HANDLE_FAVORITE":
      const isInFavorite = state.favs.some(
        (fav) => fav.id === action.payload.id
      );
      isInFavorite
        ? removeFav(action.payload.id, state)
        : localStorage.setItem(
            "favs",
            JSON.stringify([...state.favs, action.payload])
          );
      return isInFavorite
        ? { ...state, favs: removeFav(action.payload.id, state) }
        : { ...state, favs: [...state.favs, action.payload] };

    default:
      state;
  }
};

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
