import { format } from 'date-fns'
import fr from 'date-fns/locale/fr/index.js'
import _ from 'lodash'
import { YEAR } from './constants.js'

// DO NOT MODIFY
const DEFAULT_LOCALE = 'fr'

// Please add more translations and keep "fr" key
const TRANSLATIONS = {
    fr: {
        cover_line1: 'Agenda',
        cover_line2: '&Notes',
        calendar_title: `Calendrier ${YEAR}`,
        notes_tab: 'Notes',
        day_bloc_title_1: 'Top priorités',
        day_bloc_title_2: 'Autres / Futur',
        day_bloc_title_3: 'Notes du jour',
    },
}

let locale = DEFAULT_LOCALE
const setLocale = (l) => (locale = l)

const getLongFormattedDate = (date) => {
    let trans = 'getLongFormattedDate trans'
    switch (locale) {
        case 'fr':
            trans = format(date, 'iii dd LLLL', { locale: fr }).split(' ').map(_.upperFirst).join(' ')
            break
    }

    return trans
}

const getFor = (keyword) => {
    if (TRANSLATIONS?.[locale]?.[keyword]) {
        return TRANSLATIONS[locale][keyword]
    }

    return keyword
}

const getQuarterShortLabel = (quarter_number) => {
    let trans = 'getDayShort trans'
    switch (locale) {
        case 'fr':
            trans = `T${quarter_number}`
            break
    }

    return trans
}

const getMonthLabel = (date) => {
    let trans = 'getMonthLabel trans'
    switch (locale) {
        case 'fr':
            trans = _.upperFirst(format(date, 'MMMM', { locale: fr }))
            break
    }

    return trans
}

const getDayShort = (date) => {
    let trans = 'getDayShort trans'
    switch (locale) {
        case 'fr':
            trans = format(date, 'dd EEEEE', { locale: fr })
            break
    }

    return trans
}

const getDayLetter = (date) => {
    let trans = 'getDayShort trans'
    switch (locale) {
        case 'fr':
            trans = format(date, 'EEEEE', { locale: fr })
            break
    }

    return trans
}

export default {
    setLocale,
    getLongFormattedDate,
    getFor,
    getQuarterShortLabel,
    getMonthLabel,
    getDayShort,
    getDayLetter,
}
