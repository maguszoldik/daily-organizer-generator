import { doc } from './src/doc.js'
import pager from './src/pager.js'
import { PAGE_TYPE_YEAR } from './src/page/year.js'
import { PAGE_TYPE_QUARTER } from './src/page/quarter.js'
import { PAGE_TYPE_DAY } from './src/page/day.js'
import { PAGE_TYPE_NOTES_INDEX } from './src/page/notes_index.js'
import { PAGE_TYPE_NOTE } from './src/page/note.js'
import { generatePages } from './src/generator.js'

const DESTINATION = 'build/daily_organizer.pdf'

// doc.textWithLink("Click me!", 10, 10, {
//     url: "https://parall.ax/"
// });
// doc.createAnnotation({
//     type: "text",
//     title: "note",
//     bounds: {
//         x: 10,
//         y: 10,
//         w: 200,
//         h: 80
//     },
//     contents: "This is text annotation (closed by default)",
//     open: false
// });
// doc.textWithLink('Page 2', 10, 100, {
//     pageNumber: 2,
// })
// doc.textWithLink('Page 3', 10, 120, {
//     pageNumber: 3,
// })
// doc.link(50, 50, 20, 20, { pageNumber: 3 })
// doc.text('Test', 50, 60)
// doc.addPage()
// doc.addPage()

// create structure
pager.addPages(PAGE_TYPE_YEAR, 1)
pager.addPages(PAGE_TYPE_QUARTER, 4)
pager.addPages(PAGE_TYPE_DAY, 365)
pager.addPages(PAGE_TYPE_NOTES_INDEX, 1)
pager.addPages(PAGE_TYPE_NOTE, 10)

generatePages()

doc.save(DESTINATION)
