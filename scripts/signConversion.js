const getSignConversion = (year) => {
    const signs = {
        aries: {
            startDate: new Date(year, 2, 21),
            endDate: new Date(year, 3, 19)
        },
        taurus: {
            startDate: new Date(year, 3, 20),
            endDate: new Date(year, 4, 20)
        },
        gemini: {
            startDate: new Date(year, 4, 21),
            endDate: new Date(year, 5, 20)
        },
        cancer: {
            startDate: new Date(year, 5, 21),
            endDate: new Date(year, 6, 22)
        },
        leo: {
            startDate: new Date(year, 6, 23),
            endDate: new Date(year, 7, 22)
        },
        virgo: {
            startDate: new Date(year, 7, 23),
            endDate: new Date(year, 8, 22)
        },
        libra: {
            startDate: new Date(year, 8, 23),
            endDate: new Date(year, 9, 22)
        },
        scorpio: {
            startDate: new Date(year, 9, 23),
            endDate: new Date(year, 10, 21)
        },
        sagittarius: {
            startDate: new Date(year, 10, 22),
            endDate: new Date(year, 11, 21)
        },
        capricornA: {
            startDate: new Date(year, 11, 22),
            endDate: new Date(year + 1, 0, 19)
        },
        capricornB: {
            startDate: new Date(year - 1, 11, 22),
            endDate: new Date(year, 0, 19)
        },
        aquarius: {
            startDate: new Date(year, 0, 20),
            endDate: new Date(year, 1, 18)
        },
        pisces: {
            startDate: new Date(year, 1, 19),
            endDate: new Date(year, 2, 20)
        }
    }

    return signs;
}
