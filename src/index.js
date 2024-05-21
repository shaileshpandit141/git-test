// Default html, css, and js code for test 
const default_test_code = (
    `<!-- App test code, injected by JavaScript using src/index.js file. -->
    <style>
    .test {
        grid-column: 2/-2;
        font-family: Arial, Helvetica, sans-serif;
        height: fit-content;
        min-height: 100vh;
        width: 100%;
        user-select: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h1 {
        font-size: 28px;
        text-align: center;
        letter-spacing: 0.03em;
        line-height: 24px;
    }
    
    p {
        margin-block: 16px;
        font-size: 14px;
        letter-spacing: 0.03em;
        line-height: 1.5;
        text-align: center;
        width: 100%;
        min-width: 0;
        max-width: 450px;
    }

    span {
        text-wrap: nowrap;
        letter-spacing: 0.03em;
        color: #7f02ad;
    }

    .counter {
        font-size: 16px;
        letter-spacing: 0.03em;
        font-weight: 600;
        padding: 8px 16px;
        border-radius: 999rem;
        margin-bottom: 8px;
    }

    button {
    font-size: 16px;
    letter-spacing: 0.03em;
    font-weight: 600;
    border: none;
    padding: 8px 16px;
    border-radius: 999rem;
    background-color: #e7e7e7;
    transition: background-color 0.3s ease-in-out. outline 0.3s ease-in-out;
    }

    button:hover {
        background-color: #dadada;
        outline: 3.5px solid #7f02ad57;
    }
</style>
<section class="test">
    <h1>Welcome to <span>Admin-CLI</span></h1>
    <p>
        Now that the App is running with live-server, if you want to change
        the document, please edit the index.html or src/index.js
        file to update the document.
    </p>
    <h1 class="counter"><span class="counter-js">00</span></h1>
    <button id='test-btn-js' type="button">Increment</button>
</section>
`
)

document.body.insertAdjacentHTML('beforeend', default_test_code)

const counter = document.querySelector(".counter-js")
const testBtn = document.getElementById('test-btn-js')
let defaultCounterState = 1


function handleIncrement(event) {
    if (defaultCounterState < 10) {
        let temp = `0${defaultCounterState}`
        counter.innerHTML = temp
        defaultCounterState += 1
    } else {
        counter.innerHTML = defaultCounterState
        defaultCounterState += 1
    }
}


testBtn.addEventListener('click', handleIncrement)
