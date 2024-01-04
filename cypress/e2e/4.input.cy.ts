describe("useState with input", () => {
  it("<p> 태그가 있어야합니다.", () => {
    cy.visit("/input");
    cy.get("p").should("exist");
  });

  it("input이 있어야 합니다.", () => {
    cy.visit("/input");
    cy.get("input").should("exist");
  });

  it("input에 값을 입력하면 <p> 태그에 그대로 렌더링되어야 합니다.", () => {
    cy.visit("/input");
    const inputValue = "123";
    cy.get("input").type(inputValue);
    cy.get("p").should("contain", inputValue);
  });
});
