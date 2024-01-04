describe("useState and useEffect with input", () => {
  it("<p> 태그가 있어야합니다.", () => {
    cy.visit("/useEffect");
    cy.get("p").should("exist");
  });

  it("input이 있어야 합니다.", () => {
    cy.visit("/useEffect");
    cy.get("input").should("exist");
  });

  it("<span> 태그가 있어야 합니다.", () => {
    cy.visit("/useEffect");
    cy.get("span").should("exist");
  });

  it("input에 값을 입력하면 <p> 태그에 그대로 렌더링되어야 합니다.", () => {
    cy.visit("/useEffect");
    const inputValue = "123";
    cy.get("input").type(inputValue);
    cy.get("p").should("contain", inputValue);
  });

  it("input에 값을 입력할 때마다 글자수가 <span> 태그에 렌더링되어야 합니다.", () => {
    cy.visit("/useEffect");
    const inputValue = "Test";
    cy.get("input").type(inputValue);
    cy.get("span").should("contain", `글자수:${inputValue.length}`);
  });
});
