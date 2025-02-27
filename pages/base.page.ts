import { Page } from "@playwright/test";

export abstract class BasePage {
    page: Page;
    partialUrl: string;

    constructor(page: Page, partialUrl: string) {
        this.page = page;
        this.partialUrl = partialUrl;
    }

    async goto() {
        await this.page.goto(this.partialUrl);
    }
}
