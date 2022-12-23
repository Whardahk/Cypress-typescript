export class DashboardPage {
  link_sauceLabsBackpack = "Sauce Labs Backpack";
  menuBtn = "#react-burger-menu-btn";
  logoutBtn = "#logout_sidebar_link";

  //Sorting
  selectType = ".product_sort_container";
  //By Name
  firstColumn =
    "#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label";
  lastColumn =
    "#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.inventory_item_label";
  //By Price
  loColumn =
    "#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div";
  hiColumn =
    "#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.pricebar > div";

  //Add to Cart
  productOnesie = "#add-to-cart-sauce-labs-onesie";
  productBackpack = "#add-to-cart-sauce-labs-backpack";
  cartBtn = "#shopping_cart_container > a";
  cartNumber = "#shopping_cart_container > a > span";

  sauceLabsBackpack() {
    cy.contains(this.link_sauceLabsBackpack).click();
    cy.contains("Sauce Labs Backpack").should("be.visible");
  }

  logout() {
    cy.get(this.menuBtn).click();
    cy.get(this.logoutBtn).click();
    cy.contains("Accepted usernames are:").should("be.visible");
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
    } else if (selectSort == "lohi") {
      cy.get(this.loColumn).contains("$7.99");
      cy.get(this.hiColumn).contains("$49.99");
    } else if (selectSort == "hilo") {
      cy.get(this.hiColumn).contains("$7.99");
      cy.get(this.loColumn).contains("$49.99");
    }
  }

  addCart(product: string) {
    if (product == "Sauce Labs Backpack") {
      cy.get(this.productBackpack).click();
      cy.get(this.cartNumber).contains(1);
    } else if (product == "Sauce Labs Onesie") {
      cy.get(this.productOnesie).click();
      cy.get(this.cartNumber).contains(2);
    }
  }

  //Check on the Cart page
  checkCart(product: string) {
    cy.get(this.cartBtn).click();
    cy.contains(product);
  }
}
