function showSelectItems() {

    const data = [
        "California",
        "Los Angeles",
        "San Diego",
        "San Francisco",
        "San Jose",
        "San Mateo",
        "San Andreas"
    ];

    const selectPointer = document.getElementById('select-pointer')!;
    const selectItemContainer = document.getElementById('select-item-container')!;
    const selectItems = document.getElementById('select-items')!;

    var isShown = false
    selectPointer.onclick = () => {
        if (isShown) {
            isShown = false
            selectPointer.classList.remove('rotate-180');
            selectItemContainer.classList.toggle('hidden')
        }else{
            isShown = true
            selectPointer.classList.toggle('rotate-180');
            
            // Clear previous items
            selectItems.innerHTML = '';

            // Generate new items
            var i = 1
            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'd-select-item';
                div.setAttribute('name', "select-item-value");
                div.setAttribute('id', (`select-item-${i}`));
                div.textContent = item;
                selectItems.appendChild(div);

                div.addEventListener('click', () => {
                    const itemIDRaw = div.getAttribute(`id`);
                    addChip(itemIDRaw!)
                });
                i++
            });
            selectItemContainer.classList.remove('hidden');
            
        }
    }
}

function addChip(id: string) {
    const item = document.getElementById(id)!;
    const chipItems = document.getElementById('chip-items')

    const div = document.createElement('div');
    div.className = 'd-chip xs primary selected';
    div.setAttribute('id', (`chip-item-${id}`));
    div.setAttribute('select-id', (`${id}`));
    div.textContent = item.innerText;
    chipItems?.appendChild(div);
    item.remove();
    div.addEventListener('click', () => {
        restoreItem(div.getAttribute(`id`)!)
    })
}

function restoreItem(id: string) {
    const chipitem = document.getElementById(id)!;
    const chipItemContainer = document.getElementById('chip-items')
    const selectItems = document.getElementById('select-items')!;

    const div = document.createElement('div');
    div.className = 'd-select-item';
    div.setAttribute('name', "select-item-value");
    div.setAttribute('id', (`${chipitem.getAttribute('select-id')}`));
    div.textContent = chipitem.innerText;
    selectItems.appendChild(div);
    chipitem.remove();
    div.addEventListener('click', () => {
        const itemIDRaw = div.getAttribute(`id`);
        addChip(itemIDRaw!)
    });
}

class Select {
    static init() {
        showSelectItems()
    }
}

window.addEventListener('load', () => {
    Select.init();
});

export default Select