import { test } from "@playwright/test";
import { GuestHomePage } from "../../pages/home/guest-home.page";
import { SigninPage } from "../../pages/signin/signin.page";
import { WelcomePage } from "../../pages/welcome/welcome.page";
import { TEST_EMAIL, TEST_PASSWORD } from "../../settings/settings";

test.describe("User logs in successfully using email and password", async () => {
  test("Verify registered user logs in successfully with matched email and password", async ({ page, baseURL }) => {
    test.slow()

    const guestHomePage = new GuestHomePage(page);
    const signinPage = new SigninPage(page);
    const welcomePage = new WelcomePage(page);

    await test.step("Open sign-in page", async () => {
      await guestHomePage.goto();
      await guestHomePage.navigateToSigninPage();
    });

    await test.step("User logs in", async () => {
      await signinPage.signIn(TEST_EMAIL!, TEST_PASSWORD!)
    });

    await test.step("Verify user is directed to Welcome page after successful login", async () => {
      await page.waitForURL(baseURL + "/" + welcomePage.partialUrl);
    });
  });
});
