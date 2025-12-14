formEl.addEventListener("submit", (e) => {
    const userInput = getUserInput(e);
    const { structuredDate } = getStructuredDate(userInput);

    // console.log(structuredDate);
});
