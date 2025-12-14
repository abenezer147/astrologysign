const getStructuredDate = (userInput) => {
    const date = new Date(
        userInput.year,
        monthConversion[`${userInput.month}`],
        userInput.date
    );

    const structuredDate = date.toLocaleDateString(
        "default",
        { dateStyle: "full" }
    );

    return { date, structuredDate }
}
