import { doc } from './src/doc.js'
import pager from './src/pager.js'
import { PAGE_TYPE_YEAR } from './src/page/year.js'
import { PAGE_TYPE_QUARTER } from './src/page/quarter.js'
import { PAGE_TYPE_DAY } from './src/page/day.js'
import { PAGE_TYPE_NOTES_INDEX } from './src/page/notes_index.js'
import { PAGE_TYPE_NOTE } from './src/page/note.js'
import { generatePages } from './src/generator.js'
import { getDaysInYear } from 'date-fns'
import { NOTES_PER_INDEX, YEAR } from './src/constants.js'

const DESTINATION = 'build/daily_organizer.pdf'

// TODO: use config to change locale
// translation.setLocale('XXX')

// create structure
pager.addPages(PAGE_TYPE_YEAR, 1)
pager.addPages(PAGE_TYPE_QUARTER, 4)
pager.addPages(PAGE_TYPE_DAY, getDaysInYear(new Date(YEAR, 0, 1)))
pager.addPages(PAGE_TYPE_NOTES_INDEX, 3)
pager.addPages(PAGE_TYPE_NOTE, 3 * NOTES_PER_INDEX)

generatePages()

doc.save(DESTINATION)
