import Holidays from 'date-holidays'
import { COLORS } from './constants.js'
import { getDay } from 'date-fns'

const holidays = new Holidays('FR')

// Index 0 is Sunday
const DAYS_BACKGROUNDS = [
    COLORS['bg-lighter'],
    COLORS.white,
    COLORS.white,
    COLORS.white,
    COLORS.white,
    COLORS.white,
    COLORS['bg-lighter'],
]
export const getDayBackground = (date) => {
    const holidays_found = holidays.isHoliday(date)
    if (holidays_found && holidays_found.some((h) => h.type === 'public')) {
        return COLORS['bg-light']
    }

    return DAYS_BACKGROUNDS[getDay(date)]
}
