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
  dashboardPage.sorting("za");
  // dashboardPage.sorting("lohi");
  // dashboardPage.sorting("hilo");
});
