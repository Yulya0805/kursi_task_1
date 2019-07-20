/**
 * showCurrentName
 * allert current name
 * @param name
 */
const showCurrentName = function (name) {
    alert(`вы нажали на имя: ${name}`);
};

const names = ['vasa', 'pitya', 'anya', 'vera', 'alex', 'an', 'den', 'jon'];
let blockUsers = document.querySelector('#block-users');

let nameLiBlock = function() {
    var list = '';
    for (name of names) {
        list += `<li 
            onclick="showCurrentName('${name}')"
        >
            ${name}
        </li>`
    }
    return list;
};


let ulBlock = `<ul>${nameLiBlock()}</ul>`;
blockUsers.innerHTML = ulBlock;
