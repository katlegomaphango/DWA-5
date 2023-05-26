// @ts-check

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

if (form === null) throw new console.error('form undefined');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);
    
    if (dividend === "" || divider === "") {
        result.innerText = 'Division not performed. Both values are required in inputs. Try again'
    } else if (divider <= 0) {
        result.innerText = 'Division not performed. Invalid number provided. Try again'
        console.trace()
    } else {
        result.innerText = Math.floor(dividend / divider);
    }
});