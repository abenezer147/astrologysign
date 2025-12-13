formEl.addEventListener("submit", (e) => {
    const userInput = getUserInput(e);

    const date = new Date(userInput.date, userInput.month, userInput.year);
    console.log(monthConversion[`${userInput.month}`]);
});
