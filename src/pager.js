import { doc } from './doc.js'

const page_indexes = {}
const pages = []
const count_by_types = {}

const addPage = (type) => {
    pages.push({ type, number: incrementCounterType(type) })
}

const addPages = (type, quantity) => {
    for (let i = 0; i < quantity; i++) {
        addPage(type)
    }
}

const indexPage = (page, number) => {
    page_indexes[`${page.type}_${page.number}`] = number
}

const incrementCounterType = (type) => (count_by_types[type] = (count_by_types[type] ?? 0) + 1)

export default {
    pages,
    addPages,
    indexPage,
    moveToPage(page) {
        doc.setPage(page_indexes[`${page.type}_${page.number}`])
    },
    linkToPage(page) {
        return { pageNumber: page_indexes[`${page.type}_${page.number}`] }
    },
}
