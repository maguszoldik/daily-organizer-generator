import { doc } from '../doc.js'

export const PAGE_TYPE_NOTE = 'note'

export const fillPage = (page) => {
    doc.text(`Note ${page.number}`, 10, 10)
    doc.text('TODO', 50, 50)
}
