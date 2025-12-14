const displayResult = (userSign, structuredDate) => {
    resultDisplayEl.innerHTML = `
        <img
            class="sign-img"
            src="assets/signs/${userSign}.svg"
            alt="Aquarius"
        >
        <p class="result-info">You were born on <span class="teal">${structuredDate}</span>. <span class="pink">And your sign is <span class="capped">${userSign}</span></span>.</p>
    `;
}
