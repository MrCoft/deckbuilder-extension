import Vue from 'vue';
import Overlay from '@components/overlay';
// import "vue-awesome/icons";
// import Icon from "vue-awesome/components/Icon";

// Vue.component("icon", Icon);


function addOverlay({ el, name }) {
    // todo - update func? apply changes only? check so we dont add it twice
    let placeholder = document.createElement('div')
    el.appendChild(placeholder)
    console.log(Overlay)
    new Vue({
        render: h => h(Overlay, { props: { name } })
    }).$mount(placeholder)
}

function modifyDOM(els) {
    for (let el of els)
        addOverlay(el)
}

export function registerOverlay({ getCards }) {
    window.onload = () => modifyDOM(getCards())
}
