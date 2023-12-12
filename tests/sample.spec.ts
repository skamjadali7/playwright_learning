import {test,expect} from '@playwright/test'

test('check url',async({page})=>{
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Fast and reliable end-to-end testing for modern web apps | Playwright/)

    await page.locator(':nth-match(:text("API"),1)').click();
    await expect(page).toHaveTitle(/Playwright Library | Playwright/);
})

test('check api documentation page',async ({page})=>{
    await page.goto('https://playwright.dev/docs/api/class-apirequest');
    await page.locator(':nth-match(:text("APIRequest"),1)').click();
    await expect(page).toHaveTitle(/APIRequest/);
})
