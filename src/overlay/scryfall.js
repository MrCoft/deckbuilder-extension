import Vue from 'vue';
import Overlay from '@components/overlay';


function findCards() {
    let rawElements = document.body.getElementsByClassName('card-grid-item')
    let elements = []
    for (let element of rawElements) {
        // if (element.classList.contains(''))
        if (element.getAttribute('aria-hidden'))
            continue
        elements.push(element)
    }
    return elements
}

function addOverlay(element) {
    let placeholder = document.createElement('div')
    element.appendChild(placeholder)
    new Vue({
        el: placeholder,
        render: h => h(Overlay)
    });
}

function modifyDOM() {
    let elements = findCards()
    for (let element of elements)
        addOverlay(element)
}

export function registerOverlay() {
    // modifyDOM()
    window.onload = modifyDOM
}
