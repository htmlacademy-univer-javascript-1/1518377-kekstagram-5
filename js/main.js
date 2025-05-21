function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(array) {
  return array[getRandomInt(0, array.length - 1)];
}

function generateMessage() {
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const count = getRandomInt(1, 2);
  const shuffled = messages.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).join(' ');
}

const names = ['Артём', 'Ольга', 'Светлана', 'Игорь', 'Максим', 'Мария', 'Лена', 'Вадим'];

let globalCommentId = 1;

function generateComment() {
  return {
    id: globalCommentId++,
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: generateMessage(),
    name: getRandomElement(names),
  };
}

function generateComments() {
  const count = getRandomInt(0, 30);
  return Array.from({ length: count }, generateComment);
}

function generatePhoto(id) {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `Описание фотографии №${id}`,
    likes: getRandomInt(15, 200),
    comments: generateComments()
  };
}

function generatePhotos(count = 25) {
  return Array.from({ length: count }, (_, index) => generatePhoto(index + 1));
}

const photoDescriptions = generatePhotos();
console.log(photoDescriptions);
