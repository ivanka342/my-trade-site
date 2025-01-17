function addItem(trade) {
    document.getElementById('item-selection').style.display = 'block';
    // Сохраняем, в какой трейд нужно добавить предмет
    sessionStorage.setItem('currentTrade', trade);
}

function addItemToTrade(itemType) {
    const trade = sessionStorage.getItem('currentTrade');
    const tradeContainer = document.getElementById(`${trade}-items`);

    const newItem = document.createElement('div');
    newItem.classList.add('trade-item');
    newItem.innerText = itemType;

    // Здесь можно добавить картинку, например:
    const img = document.createElement('img');
    img.src = `images/${itemType}.png`; // Путь к картинке
    img.alt = itemType;

    newItem.appendChild(img);

    tradeContainer.appendChild(newItem);

    // Скрыть окно выбора после добавления
    document.getElementById('item-selection').style.display = 'none';
}