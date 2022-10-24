let productInfo = {
  name: 'Apple iPhone 13',
  currentColor: 'синий',
  characteristics: {
    currentMemory: '128 ГБ',
    display: '6.1',
    operatingSystem: 'iOS 15',
    wirelessInterfaces: ['NFC', 'Bluetooth', 'Wi-Fi'],
    processor: 'Apple A15 Bionic',
    weight: '173 г',
  },
  price: 67990,
  oldPrice: 75990,
  discount: '8%',
  description: `Наша самая совершенная система двух камер. Особый взгляд на прочность дисплея. Чип , с которым всё супербыстро. Аккумулятор держится заметно дольше. iPhone 13— сильный мира всего.
  Мы разработали совершенно новую схему расположения и развернули объективы на 45 градусов. Благодаря этому внутри корпуса поместилась нашал учшая система двух камер с увеличенной матрицей широкоугольной камеры. Кроме того, мы освободили место для системы оптической стабилизации изображения сдвигом матрицы. И повысили скорость работы матрицы насверхширокоугольной камере.  
  Новая сверхширокоугольная камера видит больше деталей в тёмных областях снимков. Новая широкоугольная камера улавливает на 47% больше света для более качественных фотографий и видео. Новая оптическая стабилизация со сдвигом матрицы обеспечит чёткие кадры даже в неустойчивом положении.  
  Режим «Киноэффект» автоматически добавляет великолепные эффекты перемещения фокуса и изменения резкости. Просто начните запись видео. Режим «Киноэффект» будет удерживать фокус на объекте съёмки, создавая красивый эффект размытиявокруг него. Режим «Киноэффект» распознаёт, когда нужно перевести фокус на другого человека или объект, который появился в кадре. Теперь ваши видео будут смотреться как настоящее кино.`,
  images: ['./img/color-1.webp', './img/color-2.webp', './img/color-3.webp', './img/color-4.webp', './img/color-5.webp',],
  colors: ['Красный', 'Зелёный', 'Розовый', 'Голубой', 'Белый', 'Чёрный'],
  memorys: ['128 ГБ', '256 ГБ', '512 ГБ',],
  deliverys: [
    { name: 'Самовывоз', date: 'четверг, 1 сентября', cost: 0 },
    { name: 'Курьером', date: 'четверг, 1 сентября', cost: 0 },
  ],
};

let userInfo = {
  id: 1,
  avatar: 'https://thispersondoesnotexist.com/image',
  name: 'Марк Г.',
  rating: '5',
  content: {
    experience: `менее месяца`,
    quality: `это мой первый айфон после после огромного количества телефонов на андроиде. всёплавно, чётко и красиво. довольно шустрое устройство. камера весьма неплохая,ширик тоже на высоте.`,
    defect: `к самому устройству мало имеет отношение, но перенос данных с андроида - адскаявещь) а если нужно переносить фото с компа, то это только через itunes, которыйурезает качество фотографий исходное`,
  },
};

let userInfoTwo = {
  id: 2,
  avatar: 'https://thiscatdoesnotexist.com/',
  name: 'Валерий Коваленко',
  rating: '4',
  content: {
    experience: `менее месяца`,
    quality: `OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго`,
    defect: `Плохая ремонтопригодность`,
  },
};