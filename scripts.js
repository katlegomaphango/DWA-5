// @ts-check

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

if (form === null || result === null) throw new console.error('form and result are undefined');

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //@ts-ignore
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);
    
    if (dividend === "" || divider === "") {
        result.textContent = 'Division not performed. Both values are required in inputs. Try again'
        return
    }

    const dividendNum = parseInt(dividend.toString())
    const dividerNum = parseInt(divider.toString())
    
    if (dividerNum <= 0) {
        result.textContent = 'Division not performed. Invalid number provided. Try again'
        console.trace()
    } else {
        result.textContent = Math.floor(dividendNum / dividerNum).toString();
    }
});