import { doc } from '../doc.js'

export const PAGE_TYPE_DAY = 'day'

export const fillPage = (page) => {
    doc.text(`Jour ${page.number}`, 10, 10)
    doc.text('TODO', 50, 50)
}
