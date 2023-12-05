import {test,expect} from '@playwright/test'

test('check url',async({page})=>{
    await page.goto('https://www.cricbuzz.com/');
    await expect(page).toHaveTitle(/Live Cricket Score/)
})
