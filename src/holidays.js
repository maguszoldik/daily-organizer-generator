import Holidays from 'date-holidays'
import { colors } from './constants.js'
import { getDay } from 'date-fns'

const holidays = new Holidays('FR')

// Index 0 is Sunday
const DAYS_BACKGROUNDS = [
    colors['bg-gray-lighter'],
    colors.white,
    colors.white,
    colors.white,
    colors.white,
    colors.white,
    colors['bg-gray-lighter'],
]
export const getDayBackground = (date) => {
    const holidays_found = holidays.isHoliday(date)
    if (holidays_found && holidays_found.some((h) => h.type === 'public')) {
        return colors['bg-gray-light']
    }

    return DAYS_BACKGROUNDS[getDay(date)]
}
