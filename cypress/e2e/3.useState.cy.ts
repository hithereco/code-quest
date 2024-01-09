describe("setState", () => {
  it("/setState 페이지에는 숫자가 들어있는 <p>가 있어야합니다.", () => {
    cy.visit("/useState");
    cy.get("p").invoke("text").should("match", /\d+/);
  });

  it("/setState 페이지에는 버튼이 있어야 합니다.", () => {
    cy.visit("/useState");
    cy.get("button").should("exist");
  });

  it("버튼을 클릭하면 숫자가 1씩 증가해야합니다.", () => {
    cy.visit("/useState");
    cy.get("p")
      .invoke("text")
      .then((text) => {
        const number = parseInt(text);
        cy.get("button").click();
        cy.get("p").should("contain", number + 1);
      });
  });
});
