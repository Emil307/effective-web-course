import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

    :root {
        --header-bg-color: #FF0000;
        --footer-bg-color: #555;
        --primary-color: #EFAD4D;
        --title-text-color: #111;
        --character-title-color: #FF0000;
        --light-text-color: #888;
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        font-size: 16px;
        box-sizing: border-box;
    }

    button, input {
        border: none;
        background: none;
    }

    input:focus {
        outline: none;
    }
    a {
        text-decoration: none;
    }
    .active {
        text-decoration: underline;
    }
`