import { doc } from './doc.js'

const pages = []
const page_indexes = {}
const count_by_types = {}

const addPages = (type, quantity) => {
    for (let i = 0; i < quantity; i++) {
        addPage(type)
    }
}
const addPage = (type) => {
    pages.push({ type, number: incrementCounterType(type) })
}
const incrementCounterType = (type) => (count_by_types[type] = (count_by_types[type] ?? 0) + 1)

const indexPage = (page, number) => {
    page_indexes[`${page.type}_${page.number}`] = number
}

const moveToPage = (page) => {
    doc.setPage(page_indexes[`${page.type}_${page.number}`])
}

const linkToPage = (page) => {
    return { pageNumber: page_indexes[`${page.type}_${page.number}`] }
}

export default {
    pages,
    addPages,
    indexPage,
    moveToPage,
    linkToPage,
}
