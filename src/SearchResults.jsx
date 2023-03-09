export default function SearchResults(props) {
  return (
    <div className="search-results">
      {/* <h2>SearchResults: {props.searchQuery}</h2> */}
      {props.searchResults === "" ? (
        <h1>What can I help You with? 😉</h1>
      ) : (
        props.searchResults.map((result, i) => (
          <div key={i} className="result">
            <a
              href={"https://en.wikipedia.org/wiki/" + result.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{result.title}</h3>
            </a>
            {/* {result.snippet} */}
            <div className="snippet" dangerouslySetInnerHTML={{ __html: result.snippet }}></div>
          </div>
        ))
      )}
    </div>
  );
}
