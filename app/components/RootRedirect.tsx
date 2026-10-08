"use client";
import {useEffect} from 'react';
export default function RootRedirect() {
 useEffect(() => {
  let saved = document.cookie.match(/(?:^|;\s*)mw_locale=(fr|en)(?:;|$)/)?.[1];
  if (!saved) { try { const value = localStorage.getItem('mw_locale'); if(value === 'fr' || value === 'en') saved = value; } catch {} }
  // Local static preview has no Cloudflare country; use the specified non-FR default.
  window.location.replace(`/${saved || 'en'}/${location.search}${location.hash}`);
 }, []);
 return null;
}
