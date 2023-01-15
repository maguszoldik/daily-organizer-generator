import { doc } from './doc.js'
import pager from './pager.js'
import { PAGE_TYPE_YEAR, fillPage as fillYearPage } from './page/year.js'
import { PAGE_TYPE_QUARTER, fillPage as fillQuarterPage } from './page/quarter.js'
import { PAGE_TYPE_DAY, fillPage as fillDayPage } from './page/day.js'
import { PAGE_TYPE_NOTES_INDEX, fillPage as fillNoteIndexPage } from './page/notes_index.js'
import { PAGE_TYPE_NOTE, fillPage as fillNotePage } from './page/note.js'

const generateEmptyPages = () => {
    let page_number = 1
    pager.pages.forEach((page) => {
        doc.addPage()
        page_number++

        pager.indexPage(page, page_number)
    })
}

const fillPage = (page) => {
    const fillers = {}

    fillers[PAGE_TYPE_YEAR] = fillYearPage
    fillers[PAGE_TYPE_QUARTER] = fillQuarterPage
    fillers[PAGE_TYPE_DAY] = fillDayPage
    fillers[PAGE_TYPE_NOTES_INDEX] = fillNoteIndexPage
    fillers[PAGE_TYPE_NOTE] = fillNotePage

    if (fillers.hasOwnProperty(page.type)) {
        pager.moveToPage(page)
        fillers[page.type](page)
    }
}

export const generatePages = () => {
    generateEmptyPages()
    pager.pages.forEach(fillPage)
}
