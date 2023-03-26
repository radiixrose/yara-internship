import { useReducer } from "react";
import { ContextTest } from "./contexts/ContextTest";
import searchImages from "./api";
import ImageList from "./components/ImageList/ImageList";
import SearchBar from "./components/SearchBar/SearchBar";
import { reducer } from "./reducers/reducer";

const initialState = {
  images: [],
  term: "",
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { images, term } = state;

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    dispatch({ type: "SET_IMAGES", payload: result });
    dispatch({ type: "SET_TERM", payload: term });
  };

  return (
    <div>
      <ContextTest.Provider value={{ images, term, handleSubmit }}>
        <SearchBar />
        <ImageList />
      </ContextTest.Provider>
    </div>
  );
}

export default App;
