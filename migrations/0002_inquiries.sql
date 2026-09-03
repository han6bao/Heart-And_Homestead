-- Inquiry form submissions from the Heart & Homestead site.
-- One database is shared by preview + prod; keep this additive.
CREATE TABLE IF NOT EXISTS inquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_type TEXT NOT NULL DEFAULT '',
  name TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  phone TEXT NOT NULL DEFAULT '',
  contact_method TEXT NOT NULL DEFAULT '',
  timeframe TEXT NOT NULL DEFAULT '',
  location TEXT NOT NULL DEFAULT '',
  subjects TEXT NOT NULL DEFAULT '',
  capture_hopes TEXT NOT NULL DEFAULT '',
  special_meaning TEXT NOT NULL DEFAULT '',
  heard_from TEXT NOT NULL DEFAULT '',
  extras TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);