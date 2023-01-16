import { doc } from './doc.js'
import pager from './pager.js'
import { PAGE_TYPE_YEAR, fillPage as fillYearPage } from './page/year.js'
import { PAGE_TYPE_QUARTER, fillPage as fillQuarterPage } from './page/quarter.js'
import { PAGE_TYPE_DAY, fillPage as fillDayPage } from './page/day.js'
import { PAGE_TYPE_NOTES_INDEX, fillPage as fillNoteIndexPage } from './page/notes_index.js'
import { PAGE_TYPE_NOTE, fillPage as fillNotePage } from './page/note.js'
import { YEAR } from './constants.js'
import { format } from 'date-fns'

const generateEmptyPages = () => {
    let page_number = 1
    pager.pages.forEach((page) => {
        doc.addPage()
        page_number++

        pager.indexPage(page, page_number)
    })
}

const TYPES_IN_TOC = [PAGE_TYPE_YEAR, PAGE_TYPE_QUARTER, PAGE_TYPE_DAY, PAGE_TYPE_NOTES_INDEX]
const TYPES_WITH_PARENT = [PAGE_TYPE_QUARTER, PAGE_TYPE_DAY, PAGE_TYPE_NOTES_INDEX]
const outlines_parents = {}
const generateToc = () => {
    pager.pages.forEach(generateTocForPage)
}
const generateTocForPage = (page) => {
    if (!TYPES_IN_TOC.includes(page.type)) {
        return
    }

    if (shouldCreateOutlineParent(page) && !outlines_parents.hasOwnProperty(page.type)) {
        outlines_parents[page.type] = doc.outline.add(null, tocPageTitle(page, true), null)
    }
    doc.outline.add(outlines_parents[page.type], tocPageTitle(page), pager.linkToPage(page))
}
const shouldCreateOutlineParent = (page) => TYPES_WITH_PARENT.includes(page.type)
const tocPageTitle = (page, parent = false) => {
    const TITLES = {}
    TITLES[PAGE_TYPE_YEAR] = `Calendrier année ${YEAR}`
    TITLES[`parent__${PAGE_TYPE_QUARTER}`] = 'Trimestres'
    TITLES[PAGE_TYPE_QUARTER] = `T${page.number}`
    TITLES[`parent__${PAGE_TYPE_DAY}`] = 'Agenda quotidien'
    TITLES[PAGE_TYPE_DAY] = format(new Date(YEAR, 0, page.number), 'dd/MM')
    TITLES[`parent__${PAGE_TYPE_NOTES_INDEX}`] = 'Aperçus des notes'
    TITLES[PAGE_TYPE_NOTES_INDEX] = `Page ${page.number}`

    const index = parent ? `parent__${page.type}` : page.type
    if (TITLES.hasOwnProperty(index)) {
        return TITLES[index]
    }

    return page.type
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
    generateToc()
    pager.pages.forEach(fillPage)
}
