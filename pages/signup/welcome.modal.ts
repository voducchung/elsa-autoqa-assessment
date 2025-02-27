import { Locator, Page } from "@playwright/test";

export class WelcomeModal {
  page: Page;
  signUpButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.signUpButton = this.page.getByRole("button", { name: "No, let’s create an account" });
  }

  async chooseCreateAccountOption() {
    await this.signUpButton.click();
  }
}
