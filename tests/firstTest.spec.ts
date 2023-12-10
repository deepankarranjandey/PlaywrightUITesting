

import {test, expect} from '@playwright/test';


test('basic test', async ({ page }) => {

    await page.goto('https://google.com');

    // expect title to be "Google"
    await expect(page).toHaveTitle('Google');

});
