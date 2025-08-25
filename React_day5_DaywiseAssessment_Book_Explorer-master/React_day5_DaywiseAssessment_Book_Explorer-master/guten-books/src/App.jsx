import React, { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Filters from "./components/Filters.jsx";
import BookCard from "./components/BookCard.jsx";
import useGutendex from "./hooks/useGutendex.js";

export default function App() {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("all");        // 'all' or 'en', 'fr', etc.
  const [sort, setSort] = useState("pop-desc");           // 'api', 'pop-desc', 'pop-asc'
  const [pageUrl, setPageUrl] = useState(null);           // for next/prev pagination

  const { data, loading, error, goFirstPage, goNext, goPrev } = useGutendex({
    query,
    language,
    pageUrl,
  });

  // Client-side sort by download_count
  const sortedResults = useMemo(() => {
    const results = data?.results ?? [];
    if (sort === "api") return results;
    const copy = [...results];
    copy.sort((a, b) =>
      sort === "pop-desc"
        ? b.download_count - a.download_count
        : a.download_count - b.download_count
    );
    return copy;
  }, [data, sort]);

  return (
    <div className="app-shell">
      <Header />

      <div className="container">
        <Filters
          query={query}
          onQueryChange={(v) => {
            setQuery(v);
            setPageUrl(null);
            goFirstPage(); // rebuild base URL
          }}
          language={language}
          onLanguageChange={(v) => {
            setLanguage(v);
            setPageUrl(null);
            goFirstPage();
          }}
          sort={sort}
          onSortChange={setSort}
        />

        {loading && <div className="hint">Loading books…</div>}
        {error && <div className="error">Failed to load. {String(error)}</div>}

        {!loading && !error && (
          <>
            <div className="meta-row">
              <div>
                <b>{data?.count ?? 0}</b> results
              </div>
              <div className="pager">
                <button
                  className="btn secondary"
                  disabled={!data?.previous}
                  onClick={() => goPrev()}
                >
                  ← Previous
                </button>
                <button
                  className="btn"
                  disabled={!data?.next}
                  onClick={() => goNext()}
                >
                  Next →
                </button>
              </div>
            </div>

            <div className="grid">
              {sortedResults.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>

            <div className="pager bottom">
              <button
                className="btn secondary"
                disabled={!data?.previous}
                onClick={() => goPrev()}
              >
                ← Previous
              </button>
              <button
                className="btn"
                disabled={!data?.next}
                onClick={() => goNext()}
              >
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
