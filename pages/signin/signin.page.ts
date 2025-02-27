import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base.page";

export class SigninPage extends BasePage {
  emailInput: Locator;
  passwordInput: Locator;
  signInButton: Locator;

  constructor(page: Page) {
    super(page, "sign-in");

    this.emailInput = this.page.locator("[name=email]");
    this.passwordInput = this.page.locator("[name=password]");
    this.signInButton = this.page.getByRole("button", { name: "Sign in" });
  }

  async signIn(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}
