import { LoginPage } from "./pages/login_pages.cy";
import { DashboardPage } from "./pages/dashboard_pages.cy";

let loginPage = new LoginPage();
let dashboardPage = new DashboardPage();
const URL = "https://www.saucedemo.com/";

it("Test LOGIN", () => {
  loginPage.login(URL, "standard_user", "secret_sauce");
  loginPage.assertLogin();
});

it("Test Sauce Demo Invalid Password", () => {
  loginPage.login(URL, "standard_user", "invalidPass");
  loginPage.assertLoginFail();
});

it("Test Sauce Demo Sauce labs product backpack", () => {
  loginPage.login(URL, "standard_user", "secret_sauce");
  loginPage.assertLogin();
  dashboardPage.sauceLabsBackpack();
});

//LOGOUT
it("Test LOGOUT", () => {
  loginPage.login(URL, "standard_user", "secret_sauce");
  loginPage.assertLogin();

  dashboardPage.logout();
});
