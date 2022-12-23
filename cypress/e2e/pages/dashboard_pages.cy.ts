export class DashboardPage {
  link_sauceLabsBackpack = "Sauce Labs Backpack";
  menuBtn = "#react-burger-menu-btn";
  logoutBtn = "#logout_sidebar_link";

  //Sorting
  selectType = ".product_sort_container";
  firstColumn =
    "#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label";
  lastColumn =
    "#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.inventory_item_label";

  sauceLabsBackpack() {
    cy.contains(this.link_sauceLabsBackpack).click();
    cy.contains("Sauce Labs Backpack").should("be.visible");
  }

  sorting(selectSort: string) {
    cy.get(this.selectType).select(selectSort);
    cy.get(this.selectType).should("have.value", selectSort);
    if (selectSort == "az") {
      cy.get(this.firstColumn).contains("Sauce Labs Backpack");
      cy.get(this.lastColumn).contains("Test.allTheThings() T-Shirt (Red)");
    } else if (selectSort == "za") {
      cy.get(this.lastColumn).contains("Sauce Labs Backpack");
      cy.get(this.firstColumn).contains("Test.allTheThings() T-Shirt (Red)");
    }
    // this.navigate(url)
    // this.inputUsername(username)
    // this.inputPassword(password)
    // this.clickLogin()
  }

  logout() {
    cy.get(this.menuBtn).click();
    cy.get(this.logoutBtn).click();
    cy.contains("Accepted usernames are:").should("be.visible");
  }
}
