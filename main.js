import { doc } from './src/doc.js'
import { generateYearCalendar } from './src/calendar.js'

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

generateYearCalendar()

doc.save(DESTINATION)
