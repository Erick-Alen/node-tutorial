"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const mockData = [
    {
        id: 'A1',
        name: 'Vacuum Cleaner',
        rrp: '99.99',
        info: 'The most powerful vacuum in the world.',
    },
    {
        id: 'A2',
        name: 'Leaf Blower',
        rrp: '303.33',
        info: 'This product will blow your socks off.',
    },
    {
        id: 'B1',
        name: 'Chocolate Bar',
        rrp: '22.40',
        info: 'Deliciously overpriced chocolate.',
    },
];
const populateProducts = () => {
    const products = document.querySelector('#products');
    products.innerHTML = '';
    for (const product of mockData) {
        const item = document.createElement('product-item');
        for (const key of ['name', 'rrp', 'info']) {
            const span = document.createElement('span');
            span.slot = key;
            span.textContent = product[key];
            item.appendChild(span);
        }
        products.appendChild(item);
    }
};
document.querySelector('#fetch').addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    yield populateProducts();
}));
customElements.define('product-item', class Item extends HTMLElement {
    constructor() {
        super();
        const itemTmpl = document.querySelector('#item').content.cloneNode(true);
        this.attachShadow({ mode: 'open' }).appendChild(itemTmpl);
    }
});
