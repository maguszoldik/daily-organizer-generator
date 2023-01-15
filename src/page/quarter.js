import { doc } from '../doc.js'

export const PAGE_TYPE_QUARTER = 'quarter'

export const fillPage = (page) => {
    doc.text(`Trimestre ${page.number}`, 10, 10)
    doc.text('TODO', 50, 50)
}
