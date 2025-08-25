import React from "react";

export default function BookCard({ book }) {
  const cover =
    book.formats?.["image/jpeg"] ||
    book.formats?.["image/jpg"] ||
    null;

  const authors = (book.authors || [])
    .map(a => a.name)
    .join(", ") || "Unknown author";

  const languages = (book.languages || []).join(", ").toUpperCase();

  return (
    <article className="card">
      {cover ? (
        <img className="cover" src={cover} alt={book.title} loading="lazy" />
      ) : (
        <div className="cover placeholder">No Cover</div>
      )}
      <div className="card-body">
        <h3 className="title">{book.title}</h3>
        <p className="authors">{authors}</p>
        <div className="meta">
          <span className="tag">{languages || "N/A"}</span>
          <span className="dl">⬇ {book.download_count?.toLocaleString?.() ?? book.download_count}</span>
        </div>
      </div>
    </article>
  );
}
