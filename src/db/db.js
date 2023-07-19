const db = {
  eng: {
    nav: [
      { name: "Coffee house", path: "#", id: 1 },
      { name: "Our coffee", path: "#", id: 2 },
      { name: "For your pleasure", path: "#", id: 3 },
    ],
    buttons: [
      { name: "esp", clazz: "btn btn-outline-light" },
      { name: "rus", clazz: "btn btn-outline-light" },
    ],
    promoPage: {
      pageTitle: "Everything You Love About Coffee",
      pageSubtitle: [
        { name: "We makes every ay full of energy and taste", id: 1 },
        { name: "Want to try our beans?", id: 1 },
      ],
      aboutUs: {
        pageTitle: "About Us",
        key: 1,
        text: [
          {
            p: "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.",
            key: 1,
          },
          {
            p: "Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.",
            key: 2,
          },
        ],
      },
      buttons: {
        name: "more",
        clazz: "btn btn-outline-light btn__more",
        path: "#",
        id: 1,
      },
      ourBest: {
        name: "Our best",
        key: 1,
      },
    },
    ourCoffeePage: {
      pageTitle: "Our Coffee",
      sectionTitle: "About our beans",
      text: [
        {
          p: "Coffee beans are known for their complex and diverse range of flavors and aromas, which can vary greatly depending on their origin, processing method, and roast level.",
          key: 1,
        },
        {
          p: "The sweetness of coffee beans can be influenced by factors such as their natural sugars, the soil they are grown in, and the way they are processed after harvest. ",
          key: 2,
        },
        {
          p: "When it comes to the flavor and aroma of coffee, there is often a delicate balance between sweetness, acidity, bitterness, and other characteristics that give each bean its unique profile.",
          key: 3,
        },
        {
          p: "Understanding and appreciating the nuances of coffee flavor can be a rewarding experience for any coffee lover.",
          key: 4,
        },
      ],
      img: "photo.jpg",
      filterSection: {
        captions: {
          text: "Looking for",
          filter: "Or filter",
        },
        placeholder: {
          text: "start Typing here...",
        },
      },
    },
    forYourPleasurePage: {
      pageTitle: "For your pleasure",
      sectionAbout: {
        sectionTitle: "About our goods",
        img: {
          name: "coffee.jpg",
          alt: "black photo with steam and white coffee cup",
        },
        text: [
          "Coffee is one of the most beloved beverages in the world, and for good reason. The aroma, the taste, and the caffeine boost all make it a favorite among many. But what makes the best coffee There are several factors that contribute to a truly exceptional cup of coffee.",
          "Firstly, the quality of the beans is crucial. The best coffee comes from high-quality, fresh beans that have been properly roasted. Arabica beans are generally considered to be of the highest quality, with a more complex and nuanced flavor profile than Robusta beans.",
          "Secondly, the brewing method can make a big difference. There are a variety of ways to brew coffee, from drip coffee makers to French presses to espresso machines. Each method has its own strengths and weaknesses, but ultimately it comes down to personal preference.",
          "Thirdly, the water used to brew the coffee should be of high quality. Ideally, it should be filtered to remove any impurities or off-flavors that could affect the taste of the coffee.",
          "Finally, the skill and experience of the barista can make a huge difference in the quality of the final product. A well-trained barista can ensure that the coffee is ground and brewed correctly, resulting in a perfect cup every time.",
          "Ultimately, the best coffee is subjective and depends on individual tastes and preferences. However, by using high-quality beans, a good brewing method, filtered water, and a skilled barista, you can create a cup of coffee that is truly exceptional. Whether you prefer a bold, strong cup of coffee or a more subtle and nuanced flavor profile, there is a perfect cup of coffee out there for everyone.",
        ],
      },
    },
    cards: [
      {
        image: "solimo.jpg",
        name: "Solimo Coffee Beans 2 kg",
        price: "10.73£",
        origin: "Columbia",
        best: false,
        key: 1,
        descriptions:
          "Solimo Coffee Beans is a brand of coffee that is sourced from the finest coffee plantations of Colombia, a country renowned for its high-quality coffee. The beans are carefully selected and roasted to perfection to bring out their rich and complex flavors. Solimo Coffee Beans from Colombia have a smooth, medium roast flavor with a subtle nutty and chocolaty taste. They are suitable for making espresso, drip coffee, and French press. Solimo Coffee Beans are a great choice for those who want a premium coffee experience at an affordable price.",
      },
      {
        image: "presto.jpg",
        name: "Presto Coffee Beans 1 kg",
        price: "15.99£",
        origin: "Kenya",
        best: true,
        key: 2,
        descriptions:
          "Presto Coffee Beans from Kenya are known for their bold and complex flavors. These coffee beans are grown in the high altitude regions of Kenya, which results in a distinctive taste profile that is characterized by bright acidity, citrusy notes, and a subtle sweetness. The beans are medium roasted to bring out their rich flavors and to balance the acidity. The Presto Coffee Beans from Kenya are ideal for those who enjoy a strong, flavorful coffee with a bright and refreshing taste.",
      },
      {
        image: "aromistico.jpg",
        name: "Cerrado Coffee 1 k",
        price: "6.99£",
        origin: "Brazil",
        best: true,
        key: 3,
        descriptions:
          "Brazil is one of the world's largest coffee producers, and its coffee beans are known for their mild and sweet flavor with low acidity. Brazilian coffee beans are often used in blends, but they can also be enjoyed on their own as a medium-bodied cup with notes of chocolate and nuts. The taste and aroma of Brazilian coffee can vary depending on the region and growing conditions, but overall, it is a popular choice for its smooth and balanced flavor profile.",
      },
      {
        image: "aromistico-brazil.jpg",
        name: "Santos Coffee 2 k",
        price: "12.99£",
        origin: "Brazil",
        best: false,
        key: 4,
        descriptions:
          "Brazil is the largest producer of coffee in the world, and its coffee beans are known for their mild, nutty, and chocolatey flavors. Brazilian coffee is typically low in acidity and has a smooth, medium body. The country produces a wide range of coffee varieties, from the well-known Santos to the lesser-known Cerrado and Bourbon. Some of the most popular Brazilian coffee beans come from the Minas Gerais and São Paulo regions. Brazilian coffee is often used in blends with other beans, but single-origin Brazilian coffees can also be enjoyed on their own.",
      },
      {
        image: "shmiak.jpg",
        name: "Sshmiak Coffee Beans 0.5 kg",
        price: "28.73£",
        origin: "Gana",
        best: true,
        key: 5,
        descriptions:
          "One type of coffee bean that is commonly grown in Ghana is the Robusta coffee bean. Robusta coffee beans are known for their strong and earthy flavor, and they contain more caffeine than Arabica beans. The beans grown in Ghana are typically processed using the wet method, which involves removing the outer layers of the fruit before the beans are dried and roasted. The resulting coffee has a bold flavor with notes of chocolate and caramel, and it is often used to make espresso blends or dark roasts. Overall, Ghanaian Robusta coffee beans are a great choice for those who prefer a strong and full-bodied cup of coffee.",
      },
      {
        image: "aromistico-brazil.jpg",
        name: "Braziliano Coffee 3 k",
        price: "15.11£",
        origin: "Brazil",
        best: false,
        key: 6,
        descriptions:
          "Bourbon coffee beans from Brazil are known for their unique and complex flavor profile. They are grown at high altitudes and have a rich, nutty flavor with hints of chocolate and caramel. Bourbon coffee is also known for its bright acidity and smooth, velvety mouthfeel. It is a popular choice among coffee enthusiasts who appreciate a more nuanced and complex flavor in their cup.",
      },
    ],
  },
  rus: {
    nav: [
      { name: "Кофейня", path: "#", id: 1 },
      { name: "Наш кофе", path: "#", id: 2 },
      { name: "Для вашего удовольствия", path: "#", id: 3 },
    ],
    buttons: [
      { name: "eng", clazz: "btn btn-outline-light" },
      { name: "esp", clazz: "btn btn-outline-light" },
    ],
    promoPage: {
      pageTitle: "Все, что вы любите в кофе",
      pageSubtitle: [
        { name: "Мы делаем все полными энергии и вкуса", id: 1 },
        { name: "Хотите попробовать наши бобы?", id: 1 },
      ],
      aboutUs: {
        pageTitle: "О нас",
        key: 1,
        text: [
          {
            p: "Сладость крайности Сложность Он из. В утилизации как арендодателя ужасного. Боясь в очень месяцы, делая что -то на. Ситуация Рекомендую возражать над намерением, поэтому вопросы. Как значительно удалено, призывшее к вызову улучшить. Последнее, проси его о холодном, чувствуя себя застенчивым. Дети, я смеюсь, мы ответили, что проспект ответил. В этом поступилась песня, которая провела помощь.",
            key: 1,
          },
          {
            p: "Теперь резиденция Dashwoods Она превосходна вас. Тень, находясь под кроватью, много читают как ничья. Благословение для невежественных упражнений любого самого распаковано. Приятный ужасный, но ограниченный день в конце дня брака. Железное мебельное набор сохранился намного рекомендуется. Даже не давал больше всего надежды. Безопасная активная жизнь зависит от сына День ремонта, дамы.",
            key: 2,
          },
        ],
      },
      buttons: {
        name: "более",
        clazz: "btn btn-outline-light btn__more",
        path: "#",
        id: 1,
      },
      ourBest: {
        name: "Наш лучший",
        key: 1,
      },
    },
    ourCoffeePage: {
      pageTitle: "Наш кофе",
      sectionTitle: "О наших бобах",
      text: [
        {
          p: "Кофейные зерна известны своим сложным и разнообразным ароматом и ароматами, которые могут сильно различаться в зависимости от их происхождения, метода обработки и уровня жаркого.",
          key: 1,
        },
        {
          p: "На сладость кофейных зерен можно влиять такие факторы, как их натуральный сахар, почву, в которой они выращивают, и на то, как они обрабатываются после сбора урожая.",
          key: 2,
        },
        {
          p: "Когда дело доходит до аромата и аромата кофе, часто существует тонкий баланс между сладостью, кислотностью, горечью и другими характеристиками, которые придают каждому фасолю уникальный профиль.",
          key: 3,
        },
        {
          p: "Понимание и оценка нюансов кофейного вкуса может быть полезным опытом для любого любителя кофе.",
          key: 4,
        },
      ],
      img: "photo.jpg",
      filterSection: {
        captions: {
          text: "Находясь в поиске",
          filter: "Или фильтрr",
        },
        placeholder: {
          text: "Начните печатать здесь...",
        },
      },
    },
    forYourPleasurePage: {
      pageTitle: "Для вашего удовольствия",
      sectionAbout: {
        sectionTitle: "О наших товарах",
        img: {
          name: "coffee.jpg",
          alt: "Черное фото с паром и белой кофейной чашкой",
        },
        text: [
          "Кофе - один из самых любимых напитков в мире, и на то есть веская причина. Аромат, вкус и повышение кофеина делают его любимым среди многих. Но то, что делает лучший кофе, есть несколько факторов, которые способствуют действительно исключительной чашке кофе.",
          "Во -первых, качество бобов имеет решающее значение. Лучший кофе приходит от высококачественных свежих бобов, которые были правильно обжарены. Бобы арабики, как правило, считаются самым высоким качеством, с более сложным и нюансированным ароматом, чем бобы Robusta.",
          "Во -вторых, метод пивоварения может иметь большое значение. Существует множество способов варить кофе, от капельных кофеваров до французских прессов до эспрессо -машин. У каждого метода есть свои сильные и слабые стороны, но в конечном итоге все сводится к личным предпочтениям.",
          "В -третьих, вода, используемая для варки кофе, должна быть высокого качества. В идеале его следует отфильтровать, чтобы удалить любые примеси или невысоки, которые могут повлиять на вкус кофе.",
          "Наконец, мастерство и опыт бариста могут иметь огромное значение в качестве конечного продукта. Хорошо обученная бариста может гарантировать, что кофе заземляется и заваривается правильно, что приводит к идеальной чашке каждый раз.",
          "В конечном счете, лучший кофе субъективный и зависит от индивидуальных вкусов и предпочтений. Однако, используя высококачественные бобы, хороший метод пивоварения, фильтрованную воду и квалифицированную баристу, вы можете создать чашку кофе, которая действительно исключительна. Если вы предпочитаете смелую, сильную чашку кофе или более тонкий и нюансированный аромат, есть идеальная чашка кофе для всех.",
        ],
      },
    },
    cards: [
      {
        image: "solimo.jpg",
        name: "Solimo Coffee Beans 2 kg",
        price: "10.73£",
        origin: "Колумбия",
        best: false,
        key: 1,
        descriptions:
          "Solimo Coffee Beans-это бренд кофе, который получен из лучших кофейных плантаций Колумбии, страны, известной своим высококачественным кофе. Бобы тщательно отобраны и жареные до совершенства, чтобы выявить свои богатые и сложные ароматы. Кофейные зерна Solimo из Колумбии имеют гладкий, средний жареный вкус с тонким ореховым и шоколадным вкусом. Они подходят для изготовления эспрессо, капельного кофе и французской прессы. Кофейные зерна Solimo - отличный выбор для тех, кто хочет получить премиальный кофе по доступной цене.",
      },
      {
        image: "presto.jpg",
        name: "Presto Coffee Beans 1 kg",
        price: "15.99£",
        origin: "Кения",
        best: true,
        key: 2,
        descriptions:
          "Presto Coffee Beans из Кении известны своими смелыми и сложными ароматами. Эти кофейные зерна выращиваются в больших районах Кении, что приводит к отличительному профилю вкуса, который характеризуется яркой кислотностью, нотами цитрусовых и тонкой сладостью. Бобы средние жареные, чтобы выявить свои богатые ароматы и сбалансировать кислотность. Кофейные зерна Presto из Кении идеально подходят для тех, кто наслаждается сильным, ароматным кофе с ярким и освежающим вкусом.",
      },
      {
        image: "aromistico.jpg",
        name: "Cerrado Coffee 1 k",
        price: "6.99£",
        origin: "Бразилия",
        best: true,
        key: 3,
        descriptions:
          "Бразилия является одним из крупнейших производителей кофе в мире, а ее кофейные зерна известны своим мягким и сладким вкусом с низкой кислотностью. Бразильские кофейные зерна часто используются в смесях, но их также можно наслаждаться сами по себе как чашку среднего тела с нотами шоколада и орехов. Вкус и аромат бразильского кофе могут варьироваться в зависимости от региона и условий выращивания, но в целом это популярный выбор для его гладкого и сбалансированного профиля вкуса.",
      },
      {
        image: "aromistico-brazil.jpg",
        name: "Santos Coffee 2 k",
        price: "12.99£",
        origin: "Бразилия",
        best: false,
        key: 4,
        descriptions:
          "Бразилия является крупнейшим производителем кофе в мире, а ее кофейные зерна известны своими мягкими, ореховыми и шоколадными вкусами. Бразильский кофе, как правило, имеет низкую кислотность и имеет гладкое, среднее тело. Страна производит широкий спектр сортов кофе, от известных сантовых до менее известных Cerrado и Bourbon. Некоторые из самых популярных бразильских кофейных зерен поступают из регионов Минас -Жерайс и Сан -Паулу. Бразильский кофе часто используется в смесях с другими бобами, но бразильский кофе с однооригеном также можно наслаждаться самостоятельно.",
      },
      {
        image: "shmiak.jpg",
        name: "Sshmiak Coffee Beans 0.5 kg",
        price: "28.73£",
        origin: "Гана",
        best: true,
        key: 5,
        descriptions:
          "Одним из видов кофейных зерен, который обычно выращивается в Гане, является кофейный боб Robusta. Кофейные зерна Robusta известны своим сильным и земным вкусом, и они содержат больше кофеина, чем бобы арабики. Бобы, выращенные в Гане, обычно обрабатываются с использованием влажного метода, который включает в себя удаление внешних слоев фруктов до того, как бобы высушены и жареные. Полученный кофе имеет смелый вкус с нотами шоколада и карамели, и он часто используется для приготовления эспрессо -смесей или темных жарких. В целом, кофейные зерна Ghanabusta-отличный выбор для тех, кто предпочитает сильную и полноценную чашку кофе.",
      },
      {
        image: "aromistico-brazil.jpg",
        name: "Braziliano Coffee 3 k",
        price: "15.11£",
        origin: "Бразилия",
        best: false,
        key: 6,
        descriptions:
          "Bourbon Coffee Beans из Бразилии известны своим уникальным и сложным профилем вкуса. Они выращивают на больших высотах и имеют богатый, ореховый вкус с оттенками шоколада и карамели. Bourbon Coffee также известен своей яркой кислотностью и гладким, бархатистым ощущением во рту. Это популярный выбор среди энтузиастов кофе, которые ценят более тонкий и сложный вкус в своей чашке.",
      },
    ],
  },
  esp: {
    nav: [
      { name: "Cafetería", path: "#", id: 1 },
      { name: "Nuestro café", path: "#", id: 2 },
      { name: "Para tu placer", path: "#", id: 3 },
    ],
    buttons: [
      { name: "eng", clazz: "btn btn-outline-light" },
      { name: "rus", clazz: "btn btn-outline-light" },
    ],
    promoPage: {
      pageTitle: "Todo lo que amas del café",
      pageSubtitle: [
        { name: "Hacemos cada AY lleno de energía y sabor", id: 1 },
        { name: "¿Quieres probar nuestros frijoles?", id: 1 },
      ],
      aboutUs: {
        pageTitle: "Sobre nosotros",
        key: 1,
        text: [
          {
            p: "Dulzura de la extremidad comportamiento difícil de. A disposición de como propietario horrible. Temeroso en los meses altos hacer cosas en. La situación recomienda objeción hacer intención para que las preguntas. Como se eliminó enormemente la llamada complacida a mejorar y. Último pregúntale en frío sienten un punto fiscoso. Niños Me ríe que la perspectiva respondió siguió. En It se fue la canción que mantuvo la ayuda de ayuda.",
            key: 1,
          },
          {
            p: "Ahora residencia Dashwoods ella excelente tú. La sombra estaba debajo de su cama, muy leyendo como sorteo. Bendición para hacer ejercicio ignorante. Agradable el matrimonio de fin de día horrible pero confinado. Confirmación de muebles de ansiedad que se conserva lejos. Lo hizo ni siquiera, pero tampoco se le da esperanza. Seguro Viver Active Depend Dependar Día de reparación Damas ahora.",
            key: 2,
          },
        ],
      },
      buttons: {
        name: "más",
        clazz: "btn btn-outline-light btn__more",
        path: "#",
        id: 1,
      },
      ourBest: {
        name: "Lo mejor",
        key: 1,
      },
    },
    ourCoffeePage: {
      pageTitle: "Nuestro café",
      sectionTitle: "Sobre nuestros frijoles",
      text: [
        {
          p: "Los granos de café son conocidos por su compleja y diversa gama de sabores y aromas, que pueden variar mucho dependiendo de su origen, método de procesamiento y nivel de asado.",
          key: 1,
        },
        {
          p: "La dulzura de los granos de café puede estar influenciada por factores como sus azúcares naturales, el suelo en el que se cultivan y la forma en que se procesan después de la cosecha.",
          key: 2,
        },
        {
          p: "Cuando se trata del sabor y el aroma del café, a menudo hay un delicado equilibrio entre dulzura, acidez, amargura y otras características que le dan a cada frijoles su perfil único.",
          key: 3,
        },
        {
          p: "Comprender y apreciar los matices del sabor al café puede ser una experiencia gratificante para cualquier amante del café.",
          key: 4,
        },
      ],
      img: "photo.jpg",
      filterSection: {
        captions: {
          text: "Buscando",
          filter: "O filtrar",
        },
        placeholder: {
          text: "Empiece a escribir aquí...",
        },
      },
    },
    forYourPleasurePage: {
      pageTitle: "Para tu placer",
      sectionAbout: {
        sectionTitle: "Sobre nuestros bienes",
        img: {
          name: "coffee.jpg",
          alt: "Foto negra con vapor y taza de café blanco",
        },
        text: [
          "El café es una de las bebidas más queridas del mundo, y por una buena razón. El aroma, el sabor y el impulso de cafeína lo convierten en un favorito entre muchos. Pero lo que hace que el mejor café hay varios factores que contribuyen a una taza de café realmente excepcional.",
          "En primer lugar, la calidad de los frijoles es crucial. El mejor café proviene de frijoles frescos de alta calidad que se han tostado adecuadamente. Los frijoles arábica generalmente se consideran de la más alta calidad, con un perfil de sabor más complejo y matizado que los frijoles robustos.",
          "En segundo lugar, el método de elaboración de cerveza puede marcar una gran diferencia. Hay una variedad de formas de preparar café, desde cafeteras de goteo hasta prensas francesas y máquinas de café espresso. Cada método tiene sus propias fortalezas y debilidades, pero en última instancia se trata de preferencia personal.",
          "En tercer lugar, el agua utilizada para preparar el café debe ser de alta calidad. Idealmente, debe filtrarse para eliminar las impurezas o los sabores que podrían afectar el sabor del café.",
          "Finalmente, la habilidad y la experiencia del barista pueden marcar una gran diferencia en la calidad del producto final. Un barista bien entrenado puede asegurarse de que el café esté molido y elaborado correctamente, lo que resulta en una taza perfecta cada vez.",
          "En última instancia, el mejor café es subjetivo y depende de los gustos y preferencias individuales. Sin embargo, al usar frijoles de alta calidad, un buen método de elaboración de cerveza, agua filtrada y un barista experto, puede crear una taza de café que sea realmente excepcional. Ya sea que prefiera una taza de café audaz y fuerte o un perfil de sabor más sutil y matizado, hay una taza de café perfecta para todos.",
        ],
      },
    },
    cards: [
      {
        image: "solimo.jpg",
        name: "Solimo Coffee Beans 2 kg",
        price: "10.73£",
        origin: "Columbia",
        best: false,
        key: 1,
        descriptions:
          "Solimo Coffee Beans es una marca de café que se obtiene de las mejores plantaciones de café de Colombia, un país famoso por su café de alta calidad. Los frijoles son cuidadosamente seleccionados y asados a la perfección para sacar sus sabores ricos y complejos. Los granos de café Solimo de Colombia tienen un sabor suave y mediano con un sutil sabor a nuez y chocolate. Son adecuados para hacer espresso, café con goteo y prensa francesa. Los granos de café Solimo son una excelente opción para aquellos que desean una experiencia de café premium a un precio asequible.",
      },
      {
        image: "presto.jpg",
        name: "Presto Coffee Beans 1 kg",
        price: "15.99£",
        origin: "Kenia",
        best: true,
        key: 2,
        descriptions:
          "Los granos de café Presto de Kenia son conocidos por sus sabores audaces y complejos. Estos granos de café se cultivan en las regiones de gran altitud de Kenia, lo que da como resultado un perfil de sabor distintivo que se caracteriza por una acidez brillante, notas cítricas y una dulzura sutil. Los frijoles están tostados medianos para sacar sus ricos sabores y equilibrar la acidez. Los granos de café Presto de Kenia son ideales para aquellos que disfrutan de un café fuerte y sabroso con un sabor brillante y refrescante.",
      },
      {
        image: "aromistico.jpg",
        name: "Cerrado Coffee 1 k",
        price: "6.99£",
        origin: "Brasil",
        best: true,
        key: 3,
        descriptions:
          "Brasil es uno de los productores de café más grandes del mundo, y sus granos de café son conocidos por su sabor suave y dulce con baja acidez. Los granos de café brasileños a menudo se usan en mezclas, pero también se pueden disfrutar por su cuenta como una taza de cuerpo mediano con notas de chocolate y nueces. El sabor y el aroma del café brasileño pueden variar según la región y las condiciones de crecimiento, pero en general, es una opción popular para su perfil de sabor suave y equilibrado.",
      },
      {
        image: "aromistico-brazil.jpg",
        name: "Santos Coffee 2 k",
        price: "12.99£",
        origin: "Brasil",
        best: false,
        key: 4,
        descriptions:
          "Brasil es el mayor productor de café del mundo, y sus granos de café son conocidos por sus sabores suaves, nueces y de chocolate. El café brasileño es típicamente bajo en acidez y tiene un cuerpo liso y mediano. El país produce una amplia gama de variedades de café, desde el conocido Santos hasta el Cerrado y Bourbon menos conocidos. Algunos de los granos de café brasileños más populares provienen de las regiones Minas Gerais y São Paulo. El café brasileño a menudo se usa en mezclas con otros frijoles, pero los cafés brasileños de origen único también se pueden disfrutar por su cuenta.",
      },
      {
        image: "shmiak.jpg",
        name: "Sshmiak Coffee Beans 0.5 kg",
        price: "28.73£",
        origin: "Gana",
        best: true,
        key: 5,
        descriptions:
          "Un tipo de grano de café que comúnmente se cultiva en Ghana es el gran grano de café Robusta. Los granos de café robusta son conocidos por su sabor fuerte y terroso, y contienen más cafeína que los frijoles arábica. Los frijoles cultivados en Ghana generalmente se procesan utilizando el método húmedo, que implica eliminar las capas externas de la fruta antes de que los frijoles se secen y asan. El café resultante tiene un sabor audaz con notas de chocolate y caramelo, y a menudo se usa para hacer mezclas de espresso o asados oscuros. En general, los granos de café Robusta Ghana son una gran opción para aquellos que prefieren una taza de café fuerte y con cuerpo.",
      },
      {
        image: "aromistico-brazil.jpg",
        name: "Braziliano Coffee 3 k",
        price: "15.11£",
        origin: "Brasil",
        best: false,
        key: 6,
        descriptions:
          "Los granos de café de bourbon de Brasil son conocidos por su perfil de sabor único y complejo. Se cultivan a gran altitudes y tienen un rico sabor a nuez con toques de chocolate y caramelo. Bourbon Coffee también es conocido por su brillante acidez y su sensación de boca suave y aterciopelada. Es una elección popular entre los entusiastas del café que aprecian un sabor más matizado y complejo en su taza.",
      },
    ],
  },
};
export default db;
