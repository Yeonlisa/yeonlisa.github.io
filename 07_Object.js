describe('Object에 대해서', function () {
  /*
    이번 스프린트에서는 객체의 기본적인 내용을 재확인합니다.
    이머시브 과정에서 객체를 보다 자세하게 학습하게 됩니다. (예. prototype)
  */
  it('Object의 기본을 확인합니다.', function () {
    const emptyObj = {};
    expect(typeof emptyObj === 'object').toBe(true);
    expect(emptyObj.length).toBe(undefined);

    const megalomaniac = {
      mastermind: 'Joker',
      henchwoman: 'Harley',
      getMembers: function () {
        return [this.mastermind, this.henchwoman];
      },
      relations: ['Anarky', 'Duela Dent', 'Lucy'],
      twins: {
        'Jared Leto': 'Suicide Squad',
        'Joaquin Phoenix': 'Joker',
        'Heath Ledger': 'The Dark Knight',
        'Jack Nicholson': 'Tim Burton Batman',
      },
    };

    expect(megalomaniac.length).toBe(undefined);
    expect(megalomaniac.mastermind).toBe('Joker');
    expect(megalomaniac.henchwoman).toBe('Harley');
    expect(megalomaniac.henchWoman).toBe(undefined);
    expect(megalomaniac.getMembers()).toEqual(['Joker','Harley']);
    expect(megalomaniac.relations[2]).toBe('Lucy');
    expect(megalomaniac.twins['Heath Ledger']).toEqual('The Dark Knight');
  });

  it('Object의 속성(property)를 다루는 방법을 확인합니다.', function () {
    const megalomaniac = { mastermind: 'Agent Smith', henchman: 'Agent Smith' };

    expect('mastermind' in megalomaniac).toBe(true);

    megalomaniac.mastermind = 'Neo';
    expect(megalomaniac['mastermind']).toBe('Neo');

    expect('secretary' in megalomaniac).toBe(false);

    megalomaniac.secretary = 'Agent Smith';
    expect('secretary' in megalomaniac).toBe(true);

    delete megalomaniac.henchman;
    expect('henchman' in megalomaniac).toBe(false);
  });

  it("'this'는 method를 호출하는 시점에 결정됩니다.", function () {
    const currentYear = new Date().getFullYear();
    const megalomaniac = {
      mastermind: 'James Wood',
      henchman: 'Adam West',
      birthYear: 1970,
      calculateAge: function (currentYear) {
        return currentYear - this.birthYear;
      },
      changeBirthYear: function (newYear) {
        this.birthYear = newYear;
      },
    };

    expect(currentYear).toBe(2020);
    expect(megalomaniac.calculateAge(currentYear)).toBe(50);

    megalomaniac.birthYear = 2000;
    expect(megalomaniac.calculateAge(currentYear)).toBe(20);

    megalomaniac.changeBirthYear(2010);
    expect(megalomaniac.calculateAge(currentYear)).toBe(10);

    /*
    object method는 객체의 속성으로 정의된 함수를 말합니다.
    따라서 method의 호출은 'object.method()'의 형태를 가지게 됩니다.
    'this'는 method를 호출되는 시점에 method를 호출한 객체를 가르킵니다.
    */
  });

  it('객체의 method를 정의하는 방법을 확인합니다.', function () {
    const megalomaniac = {
      mastermind: 'Brain',
      henchman: 'Pinky',
      getFusion: function () {
        return this.henchman + this.mastermind;
      },
      battleCry(numOfBrains) {
        return (
          `They are ${this.henchman} and the` +
          ` ${this.mastermind}`.repeat(numOfBrains)
        );
      },
    };

    expect(megalomaniac.getFusion()).toEqual('PinkyBrain');
    expect(megalomaniac.battleCry(3)).toEqual('They are Pinky and the Brain Brain Brain');
  });

  it('Object를 함수의 인자로 전달할 경우, reference가 전달됩니다.', function () {
    const obj = {
      mastermind: 'Joker',
      henchwoman: 'Harley',
      relations: ['Anarky', 'Duela Dent', 'Lucy'],
      twins: {
        'Jared Leto': 'Suicide Squad',
        'Joaquin Phoenix': 'Joker',
        'Heath Ledger': 'The Dark Knight',
        'Jack Nicholson': 'Tim Burton Batman',
      },
    };

    function passedByReference(refObj) {
      refObj.henchwoman = 'Adam West';
    }
    passedByReference(obj);
    expect(obj.henchwoman).toBe('Adam West');

    const assignedObj = obj;
    assignedObj['relations'] = [1, 2, 3];
    expect(obj['relations']).toEqual([1,2,3]);

    const copiedObj = Object.assign({}, obj);
    copiedObj.mastermind = 'James Wood';
    expect(obj.mastermind).toBe('Joker');

    obj.henchwoman = 'Harley';
    expect(copiedObj.henchwoman).toBe('Adam West');

    delete obj.twins['Jared Leto'];
    expect('Jared Leto' in copiedObj.twins).toBe(false);

    /*
    마지막 테스트 코드의 결과가 예상과는 달랐을 수도 있습니다.
    'Object.assign'을 통한 복사는 reference variable은 주소만 복사하기 때문입니다. 
    이와 관련하여 얕은 복사(shallow copy)와 깊은 복사(deep copy)에 대해서 학습하시기 바랍니다.
    가이드가 될 만한 학습자료를 첨부합니다.
      https://scotch.io/bar-talk/copying-objects-in-javascript
      https://medium.com/watcha/깊은-복사와-얕은-복사에-대한-심도있는-이야기-2f7d797e008a
    */
  });
});
