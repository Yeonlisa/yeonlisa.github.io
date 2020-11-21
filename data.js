const DATA = [
  { user: 'ingikim', message: 'Welcome to Code States #codestates', created_at: dayjs(new Date('2019-01-03 12:30:20')).fromNow() },
  { user: 'satya', message: 'this is test message #pair #programming', created_at: dayjs(new Date('2019-01-04 18:30:20')).fromNow() },
  { user: 'sundar', message: 'code now! #work #hard', created_at: dayjs(new Date('2019-01-05 07:30:20')).fromNow() },
  { user: 'steve', message: 'Stay hungry, and stay foolish', created_at: dayjs(new Date('2015-01-03 12:30:20')).fromNow() },
  { user: 'tim', message: 'education for real world', created_at: dayjs(new Date('2019-01-04 18:30:20')).fromNow() },
];

const randomUser = ['ingikim', 'satya', 'sundar', 'steve', 'tim', 'jeff'];

const randomMessage = [
  '이 헌법공포 당시의 국회의원의 임기는 제1항에 의한 국회의 최초의 집회일 전일까지로 한다. 감사원은 원장을 포함한 5인 이상 11인 이하의 감사위원으로 구성한다.',
  '헌법재판소의 조직과 운영 기타 필요한 사항은 법률로 정한다. 모든 국민은 자기의 행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다.',
  '헌법개정은 국회재적의원 과반수 또는 대통령의 발의로 제안된다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다.',
  '모든 국민은 직업선택의 자유를 가진다. 군인은 현역을 면한 후가 아니면 국무총리로 임명될 수 없다. 행정권은 대통령을 수반으로 하는 정부에 속한다.',
  '민주평화통일자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다.',
  '국회는 국정을 감사하거나 특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.',
  '인간이 얼음에 고행을 따뜻한 가장 이것이다. 꽃이 곧 동력은 끝에 동산에는 그것은 거선의 별과 인생의 것이다. 구하지 착목한는 스며들어 인생의 것이다.',
  '새 가슴에 있는 만천하의 있다. 몸이 뜨거운지라, 청춘의 소리다.이것은 같으며, 피다. 설산에서 힘차게 옷을 피다. 놀이 그들의 인간의 주는 소금이라',
  '귀는 우리는 피에 무엇이 이것이다. 구하지 우리는 그들은 약동하다. 따뜻한 발휘하기 사람은 충분히 사막이다.',
];

const getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const generateNewTweet = function () {
  const tweet = {};
  tweet.user = randomUser[getRandomInt(0, randomUser.length)];
  tweet.message = randomMessage[getRandomInt(0, randomMessage.length)];
  tweet.created_at = dayjs().fromNow();
  return tweet;
};
