import React, { useState } from "react";

const LANGS = [
  { code: "all", label: "All languages" },
  { code: "en",  label: "English" },
  { code: "fr",  label: "French" },
  { code: "de",  label: "German" },
  { code: "es",  label: "Spanish" },
  { code: "it",  label: "Italian" },
  { code: "ru",  label: "Russian" },
  { code: "hi",  label: "Hindi" },
];

export default function Filters({
  query, onQueryChange,
  language, onLanguageChange,
  sort, onSortChange,
}) {
  const [localQuery, setLocalQuery] = useState(query);

  function submitSearch(e) {
    e.preventDefault();
    onQueryChange(localQuery.trim());
  }

  return (
    <form className="controls" onSubmit={submitSearch}>
      <input
        className="input"
        type="text"
        placeholder="Search by title or author…"
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
      />

      <select
        className="select"
        value={language}
        onChange={(e) => onLanguageChange(e.target.value)}
        title="Filter by language"
      >
        {LANGS.map(l => (
          <option key={l.code} value={l.code}>{l.label}</option>
        ))}
      </select>

      <select
        className="select"
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        title="Sort"
      >
        <option value="pop-desc">Popularity ↓ (downloads)</option>
        <option value="pop-asc">Popularity ↑ (downloads)</option>
        <option value="api">API order (relevance)</option>
      </select>

      <button className="btn" type="submit">Search</button>
    </form>
  );
}
