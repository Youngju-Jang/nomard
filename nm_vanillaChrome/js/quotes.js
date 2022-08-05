const quotes = [
  {
    quote:
      "수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라",
    author: "마태복음 11 : 28",
  },
  {
    quote:
      "내가 네게 명령한 것이 아니냐 강하고 담대하라두려워하지 말며 놀라지 말라 네가 어디로 가든지 네 하나님 여호와가 너와 함께 하느니라 하시니라",
    author: "여호수야 1 : 9",
  },
  {
    quote: "눈물을 흘리며 씨를 뿌리는 자는 기쁨으로 거두리라",
    author: "시편 126 : 5",
  },
  {
    quote:
      "나의 영혼이 잠잠히 하나님만 바람이여 나의 구원이 그에게서 나오는 도다",
    author: "시편 62 : 1",
  },
  {
    quote:
      "항상 기뻐하라 쉬지 말고 기도하라 범사에 감사하라 이것이 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라",
    author: "데살로니가전서 5 : 16-18",
  },
  {
    quote:
      "하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라",
    author: "요한복음 3:16",
  },
  {
    quote:
      "오직 여호와를 앙망하는 자는 새 힘을 얻으리니 독수리가 날개치며 올라감 같을 것이요 달음박질하여도 곤비하지 아니하겠고 걸어가도 피곤하지 아니하리로다",
    author: "이사야 40:31",
  },
  {
    quote:
      "우리가 알거니와 하나님을 사랑하는 자 곧 그의 뜻대로 부르심을 입은 자들에게는 모든 것이 합력하여 선을 이루느니라",
    author: "로마서 8:28",
  },
  {
    quote:
      "나는 마음이 온유하고 겸손하니 나의 멍에를 메고 내게 배우라 그리하면 너희 마음이 쉼을 얻으리니 이는 내 멍에는 쉽고 내 짐은 가벼움이라 하시니라",
    author: "마태복음 11:29-30",
  },
  {
    quote: "너는 범사에 그를 인정하라 그리하면 네 길을 지도하시리라",
    author: "로마서 8:39",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
