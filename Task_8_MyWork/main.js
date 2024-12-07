// Товар 1
let product1 = "iPhone 14" // Название товара
let productDesc1 = "Базовая модель флагманской линейки смартфонов Apple 2023-го года." // Описание товара
let productPrice1 = 9000 // Стоимость товара

// Товар 2
let product2 = "Чехол для iPhone 14" // Название товара
let productDesc2 = "Защитный чехол для iPhone 14 - выполнен из качественного пластика." // Описание товара
let productPrice2 = 700 // Стоимость товара

// Товар 3
let product3 = "Защитное стекло" // Название товара
let productDesc3 = "Прочное стекло защищает экран смартфона от царапин и повреждений." // Описание товара
let productPrice3 = 1200 // Стоимость товара

// Стоимость доставки
let deliveryPrice = 400 //

function allPrice(productPrice){
document.write(`
<footer class="footer">
        <p class="deliveryPrice"> Cтоимость доставки: ${deliveryPrice} руб</p>
<p class="allPrice">Стоимость с доставкой:${deliveryPrice+productPrice} руб</p>
    </footer>
    `)
}
allPrice(productPrice1)