import { doc } from '../../doc.js'
import { colors, NOTES_PER_INDEX, WIDTH, YEAR } from '../../constants.js'
import pager from '../../pager.js'
import { PAGE_TYPE_QUARTER } from '../quarter.js'
import { PAGE_TYPE_NOTES_INDEX } from '../notes_index.js'
import { PAGE_TYPE_YEAR } from '../year.js'
import { PAGE_TYPE_DAY } from '../day.js'
import { PAGE_TYPE_NOTE } from '../note.js'
import { getQuarter } from 'date-fns'

const tabs_y = 2.55
const tabs_text_y = tabs_y + 7.9
const tabs_height = 10.5
const first_tab_x = 8
const first_quarter_x = 74
const notes_x = 126
const left_margin = 2

export const drawTabs = (title, page) => {
    doc.setLineWidth(0.2)
    doc.setFont('SketchyTimes', 'bold')
    doc.setFontSize(24)

    const is_note_page = page.type === PAGE_TYPE_NOTE

    /**
     * Background
     */
    doc.setFillColor(colors['bg-gray-dark'])
    doc.rect(0, 0, WIDTH, 13, 'F')

    /**
     * First tab
     */
    setTabStyle(page.type === PAGE_TYPE_YEAR && page.number === 1)
    if ([PAGE_TYPE_NOTE].includes(page.type)) {
        doc.setTextColor(colors['text-gray-dark'])
    }
    if ([PAGE_TYPE_DAY].includes(page.type)) {
        doc.setTextColor(colors['text-gray-darker'])
    }
    drawTab({
        x: first_tab_x,
        width: 63,
        text: title,
        link: is_note_page
            ? pager.linkToPage({ type: PAGE_TYPE_NOTES_INDEX, number: Math.ceil(page.number / NOTES_PER_INDEX) })
            : pager.linkToPage({ type: PAGE_TYPE_YEAR, number: 1 }),
    })

    /**
     * Quarters tabs
     */
    const quarters = pager.pages.filter((p) => p.type === PAGE_TYPE_QUARTER).map((p) => p.number)
    quarters.forEach((q) => {
        setTabStyle(page.type === PAGE_TYPE_QUARTER && page.number === q)
        if (page.type === PAGE_TYPE_DAY && getQuarter(new Date(YEAR, 0, page.number)) === q) {
            doc.setFillColor(colors['bg-gray-lighter'])
        }
        drawTab({
            x: first_quarter_x + (q - 1) * 12,
            width: 13,
            text: `T${q}`,
            link: pager.linkToPage({ type: PAGE_TYPE_QUARTER, number: q }),
        })
    })

    /**
     * Notes / 20XX tab
     */
    setTabStyle(page.type === PAGE_TYPE_NOTES_INDEX && page.number === 1)
    drawTab({
        x: notes_x,
        width: is_note_page ? 19 : 21,
        text: is_note_page ? `${YEAR}` : 'Notes',
        link: is_note_page
            ? pager.linkToPage({ type: PAGE_TYPE_YEAR, number: 1 })
            : pager.linkToPage({ type: PAGE_TYPE_NOTES_INDEX, number: 1 }),
    })

    /**
     * tabs bottom line
     */
    doc.line(0, 13.1, WIDTH, 13, 'S')
    // hacky white rectangle to mask a portion of the line and tab's rect bottom line
    if ([PAGE_TYPE_DAY, PAGE_TYPE_NOTE].includes(page.type)) {
        doc.setFillColor(colors.white)
        doc.rect(first_tab_x + 0.1, 12, 63 - 0.25, 2, 'F')
    }
}

const setTabStyle = (selected) => {
    if (selected) {
        doc.setFillColor(colors['bg-gray'])
        doc.setTextColor(colors['text-on-gray-dark'])
    } else {
        doc.setFillColor(colors.white)
        doc.setTextColor(colors.black)
    }
}

const drawTab = ({ x, width, text, link }) => {
    doc.rect(x, tabs_y, width, tabs_height, 'F')
    doc.rect(x, tabs_y, width, tabs_height, 'S')
    doc.textWithLink(text, x + left_margin, tabs_text_y, link)
}
