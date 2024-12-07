// Создание контейнера
document.write('<div class="container">')

// Заголовок
document.write('<h1 class="main-title">Корзина</h1>')

// Создание списка
document.write('<ul class="product-list">')

let index = 0 // Счетчик нумерации
let totalPrice = 0 // Сумма покупки

// Товар 1
let product1 = "iPhone 14" // Название товара
let productDesc1 = "Базовая модель флагманской линейки смартфонов Apple 2023-го года." // Описание товара
let productPrice1 = 9000 // Стоимость товара
index = index + 1 // Увеличиваем счетчик порядкового номера на 1
totalPrice = totalPrice + productPrice1 // Прибавляем стоимость к общей сумме

document.write(`<li class="product">
                  <span class="product__number">${index}</span>
                  <h2 class="product__title">${product1}</h2>
                  <p class="product__desc">
                    ${productDesc1}
                  </p>
                  <strong class="product__price">${productPrice1} руб</strong>
                </li>`)

// Товар 2
let product2 = "Чехол для iPhone 14" // Название товара
let productDesc2 = "Защитный чехол для iPhone 14 - выполнен из качественного пластика." // Описание товара
let productPrice2 = 700 // Стоимость товара
index = index + 1 // Увеличиваем счетчик порядкового номера на 1
totalPrice = totalPrice + productPrice2 // Прибавляем стоимость к общей сумме

document.write(`<li class="product">
                  <span class="product__number">${index}</span>
                  <h2 class="product__title">${product2}</h2>
                  <p class="product__desc">
                    ${productDesc2}
                  </p>
                  <strong class="product__price">${productPrice2} руб</strong>
                </li>`)

// Товар 3
let product3 = "Защитное стекло" // Название товара
let productDesc3 = "Прочное стекло защищает экран смартфона от царапин и повреждений." // Описание товара
let productPrice3 = 1200 // Стоимость товара
index = index + 1 // Увеличиваем счетчик порядкового номера на 1
totalPrice = totalPrice + productPrice3 // Прибавляем стоимость к общей сумме
document.write(`<li class="product">
                  <span class="product__number">${index}</span>
                  <h2 class="product__title">${product3}</h2>
                  <p class="product__desc">
                    ${productDesc3}
                  </p>
                  <strong class="product__price">${productPrice3} руб</strong>
                </li>`)

document.write('</ul>')

// Блок финальной стоимости
let deliveryPrice = 400 // Стоимость доставки
document.write(`<div class="price-block">
                  <span class="price-block__delivery-price">Стоимость доставки: ${deliveryPrice} руб.</span>
                  <strong class="price-block__total-price">Стоимость доставки: ${deliveryPrice + totalPrice} руб</strong>
                </div>`)

document.write('</div>')