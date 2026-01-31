// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  
  /* Maximum time one test can run (increased to 2 minutes for long sentences) */
  timeout: 120 * 1000,
  
  /* Maximum time for expectations (like checking if text appears) */
  expect: {
    timeout: 15000,
  },

  /* Run tests one by one to prevent connection lag on the website */
  fullyParallel: false,
  workers: 1,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Reporter configuration - This ensures the 'show-report' command finds the file */
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'always' }]
  ],

  /* Shared settings for all projects */
  use: {
    /* Base URL for navigation */
    baseURL: 'https://www.swifttranslator.com/',

    /* Collect trace when retrying a failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    
    /* Browser settings */
    headless: false, // Keep it false so you can watch the typing
    viewport: { width: 1280, height: 720 },
    
    /* Screenshot and video settings */
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    
    /* Global timeout for actions like click() or fill() */
    actionTimeout: 20000,
    navigationTimeout: 30000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});