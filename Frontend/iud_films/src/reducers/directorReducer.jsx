import { useReducer } from "react";

export function DirectorReducer() {
  const initialState = {
    movies: { data: [] },
    loading: true,
    page: 1,
    totalPages: 1,
    activeFilter: {},
    filter: { nombre: "" },
  };

  function moviesReducer(state, action) {
    switch (action.type) {
      case "FETCH_START":
        return {
          ...state,
          loading: true,
        };

      case "FETCH_SUCCESS":
        return {
          ...state,
          loading: false,
          movies: action.payload || { ...state, data: [] },
          totalPages: action.payload.total || 1,
        };

      case "SET_FILTER_VALUE":
        return {
          ...state,
          filter: {
            ...state.filter,
            [action.payload.name]: action.payload.value,
          },
        };

      case "APPLY_SEARCH":
        return {
          ...state,
          activeFilters: action.payload,
          page: 1,
        };

      case "CHANGE_PAGE":
        return {
          ...state,
          page: action.payload,
        };

      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  return {
    state,
    dispatch,
  };
}
