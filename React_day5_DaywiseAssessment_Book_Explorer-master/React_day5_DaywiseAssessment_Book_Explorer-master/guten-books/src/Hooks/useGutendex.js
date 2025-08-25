import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Fetches books from Gutendex with:
 * - search (title/author)
 * - language filter
 * - pagination (next/previous)
 */
export default function useGutendex({ query, language, pageUrl }) {
  const BASE = "https://gutendex.com/books";
  const [data, setData] = useState(null);      // { count, next, previous, results: [...] }
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cached = useRef(new Map());

  // Build base URL whenever filters change (first page)
  const buildUrl = useCallback(() => {
    const params = new URLSearchParams();
    if (query) params.set("search", query);
    if (language && language !== "all") params.set("languages", language);
    return `${BASE}?${params.toString()}`;
  }, [query, language]);

  const goFirstPage = useCallback(() => {
    const url = buildUrl();
    fetchBooks(url);
  }, [buildUrl]);

  const fetchBooks = useCallback(async (url) => {
    try {
      setLoading(true);
      setError(null);

      if (cached.current.has(url)) {
        setData(cached.current.get(url));
        setLoading(false);
        return;
      }

      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      cached.current.set(url, json);
      setData(json);
    } catch (e) {
      setError(e.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  const goNext = useCallback(() => {
    if (data?.next) fetchBooks(data.next);
  }, [data, fetchBooks]);

  const goPrev = useCallback(() => {
    if (data?.previous) fetchBooks(data.previous);
  }, [data, fetchBooks]);

  // Initial & when filters change
  useEffect(() => {
    if (pageUrl) {
      fetchBooks(pageUrl);
    } else {
      goFirstPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, language, pageUrl]);

  return { data, loading, error, goFirstPage, goNext, goPrev };
}
