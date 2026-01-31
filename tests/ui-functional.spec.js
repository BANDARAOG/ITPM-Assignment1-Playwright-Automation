const { test, expect } = require('@playwright/test');

test.describe('SwiftTranslator UI Consistency Tests', () => {

    test.beforeEach(async ({ page }) => {
        // Navigate to the site before the test
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    });

    test('Pos_UI_0001: UI responsiveness and output visibility on focus change', async ({ page }) => {
        const inputArea = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
        const testInput = 'machan, api adha gedhara yamu kiyalaa hithanavaa ';
        const expectedOutput = 'මචන්, අපි අද ගෙදර යමු කියලා හිතනවා';

        // 1. Action: Type the Singlish text
        await inputArea.click();
        await inputArea.pressSequentially(testInput, { delay: 60 });

        // 2. Action: Switch Focus (Click elsewhere on the UI)
        // This verifies the UI is responsive and doesn't clear the output
        await page.click('body', { position: { x: 0, y: 0 } }); 

        // 3. Assertion: Verify the Sinhala output remains visible and correct
        const outputLocator = page.getByText(expectedOutput, { exact: false });
        await expect(outputLocator).toBeVisible({ timeout: 10000 });

        // 4. Assertion: Verify the input area still holds the typed text (UI persistence)
        await expect(inputArea).toHaveValue(testInput);
        
        console.log('PASSED: Pos_UI_0001 - UI remains responsive and output stays visible.');
    });
});