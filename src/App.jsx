import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOffset, setSearchOffset] = useState(0);
  const [searchResults, setSearchResults] = useState("");

  const fetchWiki = async () => {
    const response = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}&sroffset=${searchOffset}`
    );
    const data = await response.json();
    console.log(data.query.search);
    setSearchResults(data.query.search);
  };

  useEffect(() => {
    fetchWiki();
  }, [searchQuery, searchOffset]);

  return (
    <div className="App">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchOffset={searchOffset}
        setSearchOffset={setSearchOffset}
      />
      <SearchResults
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={searchResults}
      />
    </div>
  );
}

export default App;
