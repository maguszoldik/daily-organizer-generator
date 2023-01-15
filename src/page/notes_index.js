import { doc } from '../doc.js'

export const PAGE_TYPE_NOTES_INDEX = 'notes_index'

export const fillPage = (page) => {
    doc.text(`Note Index ${page.number}`, 10, 10)
    doc.text('TODO', 50, 50)
}
