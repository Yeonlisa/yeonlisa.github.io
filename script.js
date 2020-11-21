const state = {
  isFilteredPage: false,
};

const userNameInput = document.querySelector('#idUserNameInput');
const userTweetInput = document.querySelector('#idUserTweetInput');
const tweetButton = document.querySelector('#idTweetButton');
const randomButton = document.querySelector('#idRandomButton');
const goBackButton = document.querySelector('#idGoBackButton');

const mainTweetList = document.querySelector('#tweetlist');

const tweetListReducer = function (ul, tweet, id) {
  const li = document.createElement('li');
  li.classList.add('white');

  const user = document.createElement('span');
  const createdAt = document.createElement('div');
  const message = document.createElement('div');

  user.classList.add('classUserNameTweet');
  user.textContent = tweet.user;
  user.addEventListener('click', handleClickUser);

  const h5 = document.createElement('h5');
  createdAt.classList.add('classCreatedAtTweet');
  h5.textContent = tweet.created_at;
  createdAt.append(h5);

  message.classList.add('classMessageTweet');
  message.textContent = tweet.message;

  li.append(user, createdAt, message);
  ul.append(li);
  return ul;
};

const renderDATA = function () {
  const ul = document.createElement('ul');
  ul.id = 'tweetWrapper';

  const tweets = DATA.reduce(tweetListReducer, ul);

  state.isFilteredPage = false;
  mainTweetList.append(tweets);
};

const renderFilteredDATA = function (targetName) {
  const ul = document.createElement('ul');
  ul.id = 'tweetWrapper';

  const tweets = DATA.filter(function (tweet) {
    return tweet.user === targetName;
  }).reduce(tweetListReducer, ul);

  state.isFilteredPage = true;
  mainTweetList.append(tweets);
};

const removeTweet = function () {
  const tweetWrapper = document.querySelector('#tweetWrapper');
  tweetWrapper.remove();
};

const handleClickUser = function (event) {
  const targetName = event.target.textContent;
  alert(`${targetName} 필터링 결과입니다.`);
  removeTweet();
  renderFilteredDATA(targetName);
};

tweetButton.onclick = function () {
  if (state.isFilteredPage) {
    alert('Go Back 버튼을 눌러 전체 트윗 창으로 돌아가세요.');
    return;
  }
  if (userNameInput.value && userTweetInput.value) {
    const tweetObject = {};
    tweetObject.user = userNameInput.value;
    tweetObject.message = userTweetInput.value;
    tweetObject.created_at = dayjs().fromNow();
    alert(`${tweetObject.user}님의 트윗을 전송합니다.`);
    DATA.unshift(tweetObject);
    removeTweet();
    renderDATA();
    userNameInput.value = '';
    userTweetInput.value = '';
  } else {
    alert('User와 Message를 모두 입력하세요.');
  }
};

randomButton.addEventListener('click', function () {
  if (state.isFilteredPage) {
    alert('Go Back 버튼을 눌러 전체 트윗 창으로 돌아가세요.');
    return;
  }
  const tweetObject = generateNewTweet();
  DATA.unshift(tweetObject);
  removeTweet();
  renderDATA();
});

goBackButton.addEventListener('click', function () {
  alert('전체 트윗 창입니다.');
  removeTweet();
  renderDATA();
});

renderDATA();
