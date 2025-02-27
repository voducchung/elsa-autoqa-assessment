import { test } from "@playwright/test";
import { SignupPage } from "../../pages/signup/signup.page";
import { WelcomePage } from "../../pages/welcome/welcome.page";
import { randomEmail, randomFullname } from "../../utils/test-data";
import { DEFAULT_TEST_PASSWORD } from "../../settings/settings";

test.describe("Guest signs up successfully using email", async () => {
  test("Verify guest signs up successfully with unregistered email and all valid registration details", async ({ page, baseURL }) => {
    test.slow()

    const signupPage = new SignupPage(page);
    const welcomePage = new WelcomePage(page);

    await test.step("Open sign-up page", async () => {
      await signupPage.goto();
    });

    await test.step("User signs up", async () => {
      await signupPage.welcomeModal.chooseCreateAccountOption();
      await signupPage.signUp(randomFullname(), randomEmail(), DEFAULT_TEST_PASSWORD);
    });

    await test.step("Verify user is redirected to Welcome page after successful sign-up", async () => {
      await page.waitForURL(baseURL + "/" + welcomePage.partialUrl);
    });
  });
});
