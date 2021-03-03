# MVC 패턴
## 정의
* Model : App이 '무엇'을 할지 정의한다. DB와 상호작용을 하는 역할
* Controller : App이 '어떻게'를 할지 정의하고 화면의 로직을 처리하는 부분이다. Model또는 View의 중개인 역할
* View: App의 화면에 '무엇'을 보여주는 역할이다. 최종 사용자에게 UI를 보여주는 역할
* 주사용 : express-sequlize-db관계
### 한계
* 복잡한 화면과 데이터의 구성이 필요하면 View와 Model이 서로 의존성을 띄게 된다.
새 기능을 추가 할 경우 문제점에 대해 코드분석이나 테스트가 어렵다 

---
## 질문
* 기본적으로 development, test, production 환경 중 어떤 환경을 사용하고 있나요?
  - 기본적으로는 development환경을 사용한다.
* 어떻게 다른 환경으로 전환할 수 있나요?
  - 환경변수 NODE_ENV변경을 통해 바꿀 수 있다.
    - window: set NODE_ENV=변경사항
    - 리눅스 : export NODE_ENV=변경사항
* 여러 개의 환경이 분리되어 있는 이유는 무엇인가요?
  - 개발과 운영환경을 분리하여 현재 운영에 영향을 주지않기 위해서이다. 
* (Optional) 설정 파일은 .gitignore에 등록되어 있습니다. 설정 파일을 git의 관리를 받게  하는 대신, 환경 변수를 사용하게 만들 수 있나요?
  - npm패키지 dotenv를 설치한 후 사용가능하다.
* MySQL의 varchar나 int 타입은 Sequelize에서는 어떤 형태로 정의해야 하나요?
  - DataTypes.타입 형태로 정의한다.
* 왜 Sequelize의 타입 정의와 MySQL의 타입 정의가 다를까요?
  - SQL마다 타입 정의가 다르기 때문에 프레임워크와 SQL의 호환성 때문에 타입정의가 다르다.
* 마이그레이션을 할 때 주의해야 할 점은 무엇인가요?
  - 마이그레이션 변경시에 마이그레이션 폴더에서 직접변경이 아니라 새롭게 model을 생성해야한다.
* ORM은 MVC중 어떤 부분에서 역할을 하나요?
  - Model과 DB를 다루는 역할을 한다.

  ---
  ## 명령어
  ```
  //User.js를 생성 -> Users 테이블이 생성된다.
  npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
  ```

  ```
  //Model을 js파일로 생성 할 경우 해당 명령어를 통해 마이그레이션을 만든다.
  npx sequelize-cli db:migrate
  ```

  ### 자세한 내용은 express와sequlize 공식 문서 참조
  - <https://expressjs.com/ko/>
  - <https://sequelize.org/>
