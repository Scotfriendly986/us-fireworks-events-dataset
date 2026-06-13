# Event Schema

Applies to `data/events/2026-us.json` and `data/events/2026-nye.json`.

| Field | Type | Description | Example |
|---|---|---|---|
| `id` | string | Unique identifier | `"macys-4th-of-july-fireworks-2026"` |
| `title` | string | Display name | `"Macy's 4th of July Fireworks 2026"` |
| `slug` | string | URL-safe identifier | `"macys-4th-of-july-fireworks-2026"` |
| `country` | string | ISO 3166-1 alpha-2 | `"US"` |
| `state` | string | State abbreviation | `"NY"` |
| `city` | string | City name | `"New York City"` |
| `venue` | string | Venue or location name | `"New York City waterfront"` |
| `address` | string | Full address | `"Brooklyn Bridge, New York, NY"` |
| `startDate` | ISO 8601 | Start time with UTC offset | `"2026-07-04T21:00:00-04:00"` |
| `endDate` | ISO 8601 | End time with UTC offset | `"2026-07-04T22:30:00-04:00"` |
| `timezone` | string | IANA timezone name | `"America/New_York"` |
| `eventType` | string | `"community-event"` or `"public-display"` | `"community-event"` |
| `status` | string | `"confirmed"`, `"tentative"`, or `"cancelled"` | `"confirmed"` |
| `isFree` | boolean | Whether general admission is free | `true` |
| `officialUrl` | string | Official event page URL | `"https://www.nyc.gov/..."` |
| `sourceName` | string | Organization that published the source | `"NYC Government"` |
| `verifiedAt` | date | ISO 8601 date data was verified | `"2026-05-26"` |
| `lastUpdated` | date | ISO 8601 date record was last changed | `"2026-05-26"` |
| `summary` | string | One-sentence description | `"Macy's official July 4th..."` |
| `description` | string | Longer description | `"..."` |
| `viewingTips` | string[] | Tips for spectators | `["Arrive 2 hours early"]` |
| `parkingTips` | string[] | Parking advice | `["Use park transit lots"]` |
| `transitTips` | string[] | Transit advice | `["Use MetroCard-enabled lines"]` |
| `safetyNotes` | string[] | Safety reminders | `["Follow all NYC marshals"]` |
| `image` | string | Relative image path | `"/images/photos/new-york.webp"` |
| `latitude` | number | GPS latitude (WGS 84) | `40.7128` |
| `longitude` | number | GPS longitude (WGS 84) | `-74.006` |

## Notes

- Fields marked with `string[]` appear as pipe-separated values (`|`) in the CSV format.
- `description` is present in JSON only; omitted from CSV for brevity.
- `image` paths are relative to the fireworksnearme.top web root.
- `latitude` / `longitude` may be `null` if coordinates are unavailable.

## City page URLs

Each event links to a city guide on fireworksnearme.top using this pattern:

```
https://fireworksnearme.top/en/us/{stateSlug}/{citySlug}/fireworks
```

Example: New York City → `https://fireworksnearme.top/en/us/ny/new-york-city/fireworks`

City slugs are defined in `data/cities/cities.json`.
