import { format } from 'date-fns'
import fr from 'date-fns/locale/fr/index.js'
import _ from 'lodash'
import { YEAR } from './constants.js'

// DO NOT MODIFY
const DEFAULT_LOCALE = 'fr'

// Please add more translations and keep "fr" key
const TRANSLATORS = {
    fr: {
        calendar_title: () => `Calendrier ${YEAR}`,
        cover_line1: () => 'Agenda',
        cover_line2: () => '&Notes',
        day_bloc_title_1: () => 'Top priorités',
        day_bloc_title_2: () => 'Autres / Futur',
        day_bloc_title_3: () => 'Notes du jour',
        day_letter: (date) => format(date, 'EEEEE', { locale: fr }), // First letter of day
        day_long: (date) => format(date, 'iii dd LLLL', { locale: fr }).split(' ').map(_.upperFirst).join(' '), // Day full name
        day_short: (date) => format(date, 'dd EEEEE', { locale: fr }), // Number + First letter
        month_label: (date) => _.upperFirst(format(date, 'MMMM', { locale: fr })), // Month in plain text
        notes_tab: () => 'Notes',
        quarter_short_label: (quarter_number) => `T${quarter_number}`,
    },
}

let locale = DEFAULT_LOCALE
const setLocale = (l) => (locale = l)

const getTranslator = (keyword) => {
    if (TRANSLATORS?.[locale]?.[keyword]) {
        return TRANSLATORS[locale][keyword]
    }

    return () => keyword
}

const getFor = (keyword) => getTranslator(keyword)()
const getQuarterShortLabel = (quarter_number) => getTranslator('quarter_short_label')(quarter_number)
const getMonthLabel = (date) => getTranslator('month_label')(date)
const getLongFormattedDate = (date) => getTranslator('day_long')(date)
const getDayShort = (date) => getTranslator('day_short')(date)
const getDayLetter = (date) => getTranslator('day_letter')(date)

export default {
    setLocale,
    getLongFormattedDate,
    getFor,
    getQuarterShortLabel,
    getMonthLabel,
    getDayShort,
    getDayLetter,
}
