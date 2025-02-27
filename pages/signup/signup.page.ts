import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base.page";
import { WelcomeModal } from "./welcome.modal";

export class SignupPage extends BasePage {
  welcomeModal: WelcomeModal;
  fullNameInput: Locator;
  emailInput: Locator;
  passwordInput: Locator;
  createAccountButton: Locator;

  constructor(page: Page) {
    super(page, "sign-up");

    this.welcomeModal = new WelcomeModal(this.page);
    this.fullNameInput = this.page.locator("#name");
    this.emailInput = this.page.locator("#email");
    this.passwordInput = this.page.locator("#password");
    this.createAccountButton = this.page.getByRole("button", { name: "Create an account", exact: true });
  }

  async signUp(fullName: string, email: string, password: string) {
    await this.fullNameInput.fill(fullName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.createAccountButton.click();
  }
}
