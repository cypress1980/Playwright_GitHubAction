// @ts-check
const { test, expect } = require("@playwright/test");
test.describe("UI Test case with Playwright", () => {
const baseurl = "https://reqres.in/api";
test("UI Test case", async ({ page }) => {
await page.goto('https://talent500.co/auth/signin')
await page.locator('[name="email"]').click();
await page.locator('[name="email"]').fill('applitoolsautomation@yopmail.com');
await page.locator('[name="password"]').fill('Test@123');
await page.locator('[type="submit"]').nth(1).click();
await page.locator('[alt="DropDown Button"]').click();
await page.locator('[data-id="nav-dropdown-logout"]').click();
//const text = await page.locator('[id="progress-bar"]').textContent();
//expect(text).toContain("PROFILE");
});
});

//data-id="nav-dropdown-logout"