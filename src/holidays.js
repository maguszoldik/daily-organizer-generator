import Holidays from 'date-holidays'
import { colors } from './constants.js'
import { getDay } from 'date-fns'

const holidays = new Holidays('FR')

const DAY_BACKGROUNDS = [
    colors['bg-gray-lighter'],
    colors.white,
    colors.white,
    colors.white,
    colors.white,
    colors.white,
    colors['bg-gray-lighter'],
]
export const getDayBackground = (date) => {
    const holiday = holidays.isHoliday(date)
    if (holiday && holiday.some((h) => h.type === 'public')) {
        return colors['bg-gray-light']
    }

    return DAY_BACKGROUNDS[getDay(date)]
}
