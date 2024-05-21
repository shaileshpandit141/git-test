// Configure meta data object.
const metaData = {
    title: 'JS-App: Created by Admin-CLI',
    style: (`
    <style>
    /* Reset default styles. */
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    /* Setting scroll-behavior. */
    html {
        scroll-behavior: smooth;
    }

    body {
        display: grid;
        font-family: Arial, Helvetica, sans-serif;
        height: fit-content;
        width: 100%;
        position: relative;
        overflow: hidden;
        overflow-y: auto;
    }

    /* Apply font on input and button tags. */
    input,
    input::placeholder,
    button {
        font-family: Arial, Helvetica, sans-serif;
    }
    </style>
    `)
}

// Setting the default document title.
document.title = metaData.title
document.head.insertAdjacentHTML("beforeend", metaData.style)
