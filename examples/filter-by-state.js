// Filter fireworks events by state (Node.js ESM)
// Usage: node examples/filter-by-state.js TX
import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const events = JSON.parse(
  readFileSync(resolve(__dirname, '../data/events/2026-us.json'), 'utf8')
)

const state = process.argv[2]?.toUpperCase()
if (!state) {
  console.error('Usage: node filter-by-state.js <STATE>')
  console.error('Example: node filter-by-state.js TX')
  process.exit(1)
}

const results = events.filter(e => e.state === state)
console.log(`${results.length} events in ${state}:\n`)
for (const e of results) {
  const date = new Date(e.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  console.log(`  ${date} — ${e.title} (${e.city}) [${e.status}]`)
}
