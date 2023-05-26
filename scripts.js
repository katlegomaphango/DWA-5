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

    console.log(dividendNum, typeof dividendNum)
    
    if (isNaN(dividendNum) || isNaN(dividerNum)) {
        console.log("NAN")
        document.body.textContent = 'Something critical went wrong. Please reload the page'
    } else if (dividerNum <= 0) {
        result.textContent = 'Division not performed. Invalid number provided. Try again'
        // console.log(dividendNum / dividerNum)
    }else {
        result.textContent = Math.floor(dividendNum / dividerNum).toString();
    }
});