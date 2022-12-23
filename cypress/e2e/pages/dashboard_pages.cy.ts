export class DashboardPage {
  link_sauceLabsBackpack = "Sauce Labs Backpack";
  menuBtn = "#react-burger-menu-btn";
  logoutBtn = "#logout_sidebar_link";

  sauceLabsBackpack() {
    cy.contains(this.link_sauceLabsBackpack).click();
    cy.contains("Sauce Labs Backpack").should("be.visible");
  }

  logout() {
    cy.get(this.menuBtn).click();
    cy.get(this.logoutBtn).click();
    cy.contains("Accepted usernames are:").should("be.visible");
  }
}
