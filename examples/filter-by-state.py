#!/usr/bin/env python3
# Filter fireworks events by state
# Usage: python examples/filter-by-state.py TX
import json
import sys
from pathlib import Path
from datetime import datetime, timezone

data_path = Path(__file__).parent.parent / 'data' / 'events' / '2026-us.json'
events = json.loads(data_path.read_text())

if len(sys.argv) < 2:
    print('Usage: python filter-by-state.py <STATE>', file=sys.stderr)
    print('Example: python filter-by-state.py TX', file=sys.stderr)
    sys.exit(1)

state = sys.argv[1].upper()
results = [e for e in events if e.get('state') == state]
print(f'{len(results)} events in {state}:\n')
for e in results:
    dt = datetime.fromisoformat(e['startDate']).strftime('%b %-d')
    print(f"  {dt} — {e['title']} ({e['city']}) [{e['status']}]")
