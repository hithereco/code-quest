
## 시작하기

```bash
yarn install
```

## 로컬 웹서버 실행하기

```bash
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 로 접속할 수 있습니다

## 테스트 실행

```bash
yarn cypress run
```

테스트 코드는 cypress/e2e/ 폴더 밑에 존재합니다.

모든 테스트를 pass 시켜보세요!

> 특정 테스트만 실행시키고 싶다면
 
```bash
yarn cypress run --spec "cypress/e2e/[파일명].cy.ts"
```

## pr 만들기

hithereco/code-quest 프로젝트에, <br/>
test 브랜치로 pull request를 생성하면, <br/>
깃헙액션으로 테스트가 실행됩니다.

> 모든 테스트를 완료하면 `test` 브랜치로 pr을 만들어주세요.


> 추가 테스트 코드를 만들었을때는 `master` 브랜치로 pr을 만들어주세요 😁