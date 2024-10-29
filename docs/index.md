---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<style>
div.container {
    margin: 5%;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(4, 23.2%);
    gap: 20px;
    padding: 20px;

    div.element { 
        text-align: center;
        width: 100%;
        padding-top: 100%;
        box-shadow: rgba(37, 31, 66, 0.8) 0px 0px 0px 4px inset;
        border-radius: 3%;
        position: relative;
        h1 {
            position: absolute;
            font-size: min(3cqw, 20pt);
            top: 80%;
            left: 50%;
            font-weight: bold;
            transform: translate(-50%, -50%);
        }
        img {
            position: absolute;
            top: -10%;
            left: 0%;
        }
    }
}

/* @media only screen and (max-width: 600px) {
    div.container {
        grid-template-columns: repeat(4, 20.5%);
        grid-template-rows: repeat(7, 13.2%);
        grid-auto-flow: column;

        div.element {
            h1 {
                font-size: min(7cqw, 28pt);
            }
        }
    }
} */
</style>

<div class="container">
    <div class="element" style="background-color: lightyellow;">
    </div>
    <div class="element" style="background-color: lightyellow;">
    </div>
    <div class="element" style="background-color: lightyellow;">
        <img src="/assets/images/blade.png">
        <h1>Metals</h1>
    </div>
    <div class="element" style="visibility: hidden;">
    </div>
    <div class="element" style="background-color: #f0cece;
    box-shadow: lightcoral 0px 0px 0px 4px inset;">
    </div>
    <div class="element" style="background-color: lightseagreen;">
        <img src="/assets/images/wind.png">
        <h1>Energy</h1>
    </div>
    <div class="element" style="background-color: #7ce6e0;
    box-shadow: #04635e 0px 0px 0px 4px inset;">
    </div>
    <div class="element" style="background-color: #e6fffe;
    box-shadow: lightseagreen 0px 0px 0px 4px inset;">
    </div>
    <div class="element" style="background-color: lightcoral;
    box-shadow: #bd3535 0px 0px 0px 4px inset;
    ">
        <img src="/assets/images/energy.png">
        <h1>Consulting</h1>
    </div>
</div>
