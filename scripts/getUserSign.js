const getUserSign = (date, signs) => {
    let userSign = null;

    for(const sign in signs) {
        if (
            date >= signs[sign].startDate &&
            date <= signs[sign].endDate
        )
            userSign = sign;
    }

    return userSign;
}
