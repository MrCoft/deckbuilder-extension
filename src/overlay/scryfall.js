import { registerOverlay } from '@overlay/mod'
import { _ } from 'core-js'


let NAME_PATTERN = /(.+) \((.+)\)/

function getCards() {
    let els = document.body.getElementsByClassName('card-grid-item')
    let cards = []
    for (let el of els) {
        // if (element.classList.contains(''))
        if (el.getAttribute('aria-hidden'))
            continue
        try {
            var cardEl = el.getElementsByClassName('card')[0]
        } catch {
            continue
        }
        let title = cardEl.getAttribute('title')
        let [_, name, set] = title.match(NAME_PATTERN)
        cards.push({
            el, name, set,
        })
    }
    return cards
}

registerOverlay({ getCards })
