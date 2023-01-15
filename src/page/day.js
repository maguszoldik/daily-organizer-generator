import { doc } from '../doc.js'
import { drawTabs } from './section/tabs.js'
import { colors, YEAR } from '../constants.js'
import { format } from 'date-fns'
import fr from 'date-fns/locale/fr/index.js'
import _ from 'lodash'

export const PAGE_TYPE_DAY = 'day'

export const fillPage = (page) => {
    const date = new Date(YEAR, 0, page.number)
    const formatted_date = format(date, 'iii dd LLLL', { locale: fr }).split(' ').map(_.upperFirst).join(' ')

    drawTabs(formatted_date, page)

    doc.setFontSize(16)
    drawTitleBloc('Top priorités', 10, 20, 55)
    drawBlocOfLines(3, 10, 28, 55, true)

    drawTitleBloc('Autres / Futur', 10, 52, 55)
    drawBlocOfLines(10, 10, 60, 55, true)

    drawTitleBloc('Notes du jour', 10, 134, 55)
    drawBlocOfLines(8, 10, 142, 55)

    // timeline
    const line_x = 80
    const line_y = 16
    const line_height = 135
    doc.setDrawColor(colors['bg-gray-dark'])
    doc.setLineWidth(0.5)
    doc.line(line_x, line_y, line_x, line_y + line_height)
    doc.line(line_x + 1.5, line_y, line_x + 1.5, line_y + line_height)
    doc.lines(
        [
            [3, 4],
            [3, -4],
        ],
        line_x - 2.25,
        line_y + line_height - 2.9
    )

    drawTitleBloc('', 70, 160, 80)
}

const drawTitleBloc = (title, x, y, width) => {
    doc.setDrawColor(colors.black)
    doc.setLineWidth(0.2)

    doc.setFillColor(colors['bg-gray-lighter'])
    doc.rect(x, y - 0.25, width, 1.25, 'F')

    doc.line(x, y - 4, x + width, y - 4)

    doc.text(title, x, y)
    doc.line(x, y + 1, x + width, y + 1)
}

const drawBlocOfLines = (number, x, y, width, with_checkbox = false) => {
    const space = 7
    const checkbox_size = 4

    doc.setDrawColor(colors['bg-gray'])
    for (let i = 0; i < number; i++) {
        const line_y = y + i * space
        doc.line(x, line_y, x + width, line_y, 'S')

        if (with_checkbox) {
            doc.lines(
                [
                    [0, checkbox_size],
                    [checkbox_size, 0],
                    [0, -checkbox_size],
                    [-checkbox_size, 0],
                ],
                x + 1,
                line_y - 5.5
            )
        }
    }
}
