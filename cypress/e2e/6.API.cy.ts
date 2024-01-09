type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

describe("Fetching Todos from JSONPlaceholder", () => {
  // API라우트에 접속이 가능해야합니다.
  beforeEach(() => {
    cy.visit("/API");
  });

  it("/API 라우트에 접속하면, 지정된 url로부터 데이터를 받아와서 데이터를 출력합니다.", () => {
    // jsonplaceholder 는 API를 테스트 해볼수 있는 사이트입니다.
    // https://jsonplaceholder.typicode.com/todos 에 접속하면 todos 데이터를 받아옵니다.
    // 테스트에 정확성을 위해서 fixture를 사용합니다. /cypress/fixtures/todos.json
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/todos", {
      fixture: "todos.json",
    }).as("getTodos");

    cy.wait("@getTodos").its("response.statusCode").should("eq", 200);

    cy.wait("@getTodos").then((interception) => {
      if (!interception.response) {
        throw new Error("Missing response body");
      }

      const todos = interception.response.body;
      // 가져온 데이터가 배열이고 길이가 0보다 커야합니다.
      expect(todos).to.have.length.greaterThan(0);

      // 가져온 데이터를 가지고 화면에 출력합니다.
      // 각 데이터는 todo-list 클래스를 가진 div안에 출력되어야 합니다.
      // div 안에는 h1 태그와 p 태그가 있어야 합니다.
      // h1 태그에는 todo의 title이 출력되어야 합니다.
      // p 태그에는 todo의 completed가 출력되어야 합니다.
      
      // Hint : 배열의 프로토타입 메소드인 map 함수를 사용하면 간단하게 해결할 수 있습니다.
      todos.forEach((todo: Todo, index: number) => {
        cy.get(".todo-list")
          .eq(index)
          .within(() => {
            cy.get("h1").should("have.text", todo.title);
            cy.get("p").should("have.text", todo.completed.toString());
          });
      });
    });
  });
});
