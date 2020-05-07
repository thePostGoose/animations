function asTabs(node)   {
    let tabs = Array.from(tabsContainer.children);
    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    for (let tab of tabs)  {
        tab.style.display = 'none';
        tab.style.backgroundColor = getRandHex();
        tab.style.color = getRandHex();
        let button = document.createElement('button');
        button.classList.add('tab-button');
        buttons.appendChild(button);
    }
    let counter = Math.floor(Math.random() * tabs.length);
    tabs[counter].style.display = 'block';
    node.prepend(buttons);

    buttons.addEventListener('click', (e) => {
        let target = e.target;
        let current = [].indexOf.call(buttons.children, target);
        if (current === counter || target.tagName != 'BUTTON') return
        tabs[current].style.display = 'block';
        tabs[counter].style.display = 'none';
        counter = current;
    })

    function getRandHex(n = 6) {
        let result = '#';
        for (let i = 0; i < n; i++) {
            result += Math.floor(Math.random()*16).toString(16);
        }
        return result
    }
}
let tabsContainer = document.querySelector('.tabs-container');
asTabs(tabsContainer); 