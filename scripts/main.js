formEl.addEventListener("submit", (e) => {
    const userInput = getUserInput(e);
    const { structuredDate, date } = getStructuredDate(userInput);
    const signs = getSignConversion(date.getFullYear());
    const userSign = getUserSign(date, signs);

    console.log(userSign);
});
