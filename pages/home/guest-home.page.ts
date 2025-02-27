import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base.page";

export class GuestHomePage extends BasePage {
  signInLink: Locator;

  constructor(page: Page) {
    super(page, "");

    this.signInLink = this.page.getByRole("link", { name: "Sign in" });
  }

  async navigateToSigninPage() {
    await this.signInLink.click();
  }
}
