# City Schema

Applies to `data/cities/cities.json`.

| Field | Type | Description | Example |
|---|---|---|---|
| `country` | string | ISO 3166-1 alpha-2 | `"US"` |
| `state` | string | State abbreviation | `"NY"` |
| `stateSlug` | string | Lowercase state abbreviation (used in URLs) | `"ny"` |
| `city` | string | City name | `"New York City"` |
| `slug` | string | URL-safe city name | `"new-york-city"` |
| `timezone` | string | IANA timezone name | `"America/New_York"` |
| `intro` | string | City fireworks overview sentence | `"New York City combines..."` |
| `bestViewingAreas` | string[] | Top recommended viewing spots | `["Hudson River Waterfront"]` |
| `arrivalTips` | string[] | Arrival and logistics advice (optional) | `["Arrive by 7 PM"]` |
| `localSafetyUrl` | string | Local government safety/info page | `"https://www1.nyc.gov/"` |

## City page URL pattern

```
https://fireworksnearme.top/en/us/{stateSlug}/{slug}/fireworks
```

Example: `https://fireworksnearme.top/en/us/ny/new-york-city/fireworks`
