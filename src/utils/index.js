const PRESSURE_CONSTANT = 0.750062

export const capitalize = (str) => {
    return str.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ')
}

export const convertPressure = (hpa) => {
    return Math.round(PRESSURE_CONSTANT * hpa)
}

export const getTime = (seconds) => {
    return new Date(seconds * 1000).toLocaleTimeString('ru-RU', { timeZone: 'Atlantic/Reykjavik'})
}