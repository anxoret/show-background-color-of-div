class Root {
    constructor(element) {
        this._element = element;
        element.onclick = this.onClick.bind(this);
    }

    showBackgroundColor(target) {
        console.log(target.style.backgroundColor);
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action](event.target);
        }
    }

};

new Root(root);

function giveAnAttribute(element, attributeName, attributeValue) {
    element.setAttribute(attributeName, attributeValue);
};

let rootDivs = root.getElementsByTagName("div");
let arrayFromRootDivs = Array.from(rootDivs);

arrayFromRootDivs.forEach(div => {
    giveAnAttribute(div, "data-action", "showBackgroundColor");
});
