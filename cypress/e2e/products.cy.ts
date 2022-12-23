import { LoginPage } from "./pages/login_pages.cy";
import { DashboardPage } from "./pages/dashboard_pages.cy";

let loginPage = new LoginPage();
let dashboardPage = new DashboardPage();
const URL = "https://www.saucedemo.com/";

it("Test Sauce Demo Sauce labs sorting products", () => {
  loginPage.login(URL, "standard_user", "secret_sauce");
  loginPage.assertLogin();

  //Sorting Name A to Z
  dashboardPage.sorting("az");
  //Sorting Name Z to A
  dashboardPage.sorting("za");
  //Sorting Price low to High
  dashboardPage.sorting("lohi");
  //Sorting Price High to Low
  dashboardPage.sorting("hilo");
});
