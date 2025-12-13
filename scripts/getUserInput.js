const getUserInput = (e) => {
    e.preventDefault();

    const formData = new FormData(formEl);

    const userInput = {
        date: Number(formData.get("date")),
        month: formData.get("month"),
        year: Number(formData.get("year"))
    }

    return userInput;
}
