# IT23317758 - Playwright Automation for Swift Translator

## Assignment Information
- **Course**: IT3040 - ITPM
- **Assignment**: Assignment 1 - Automated Testing
- **Student ID**: IT23317758
- **Website Under Test**: https://www.swifttranslator.com/ (Singlish to Sinhala Translator)

---

## Project Overview

This repository contains automated test cases for the Swift Translator website, which converts Singlish (Sinhala written in English) to Sinhala Unicode. The project uses Playwright framework to automate 35 test scenarios covering positive functional tests, negative functional tests, and UI responsiveness testing.

### Test Coverage
- **24 Positive Functional Tests** (Pos_Fun_0001 to Pos_Fun_0024)
- **9 Negative Functional Tests** (Neg_Fun_0001 to Neg_Fun_0009)
- **1 UI Test** (Pos_UI_0001)
- **Total: 34 Test Scenarios**

---

## Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

To verify installation, open Command Prompt/Terminal and run:
```bash
node --version
npm --version
```

---

## Installation Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/BANDARAOG/ITPM-Assignment1-Playwright-Automation.git
cd ITPM-Assignment1-Playwright-Automation
```

Or download the ZIP file from GitHub and extract it.

### Step 2: Install Dependencies

Navigate to the project directory and run:

```bash
npm install
```

This will install Playwright and all required dependencies.

### Step 3: Install Playwright Browsers

After installing dependencies, run:

```bash
npx playwright install
```

This downloads the necessary browser binaries (Chromium, Firefox, WebKit).

---

## How to Run Tests

### Run All Tests

To execute all 34 test cases:

```bash
npx playwright test
```

### Run Tests in Headed Mode (Visible Browser)

To see the browser while tests are running (recommended for debugging):

```bash
npx playwright test --headed
```

### Run Specific Test Files

**Positive Functional Tests Only:**
```bash
npx playwright test tests/positive-functional.spec.js
```

**Negative Functional Tests Only:**
```bash
npx playwright test tests/negative-functional.spec.js
```

**UI Test Only:**
```bash
npx playwright test tests/ui-functional.spec.js
```

### Run Specific Test Cases

```bash
npx playwright test -g "Pos_Fun_0001"
```

### View Test Report

After running tests, view the detailed HTML report:

```bash
npx playwright show-report
```

---

## Project Structure

```
ITPM-Assignment1-Playwright-Automation/
├── tests/
│   ├── positive-functional.spec.js    # 24 positive test scenarios
│   ├── negative-functional.spec.js    # 9 negative test scenarios
│   └── ui-functional.spec.js          # 1 UI test scenario
├── playwright-report/                 # HTML test reports (generated after test runs)
├── test-results/                      # Test result logs and artifacts (generated after test runs)
├── playwright.config.js               # Playwright configuration file
├── package.json                       # Project dependencies
├── package-lock.json                  # Dependency lock file
└── README.md                          # This file
```

---

## Test Scenarios Covered

### Positive Functional Tests (24 scenarios)
The positive tests validate correct translation of various Singlish inputs:

- ✅ **Simple Sentences** - Basic Singlish phrases and greetings (Pos_Fun_0001, 0002, 0003)
- ✅ **Questions & Commands** - Interrogative and imperative sentences (Pos_Fun_0004, 0005, 0006)
- ✅ **Complex Sentences** - Multi-clause and compound sentences with proper context handling (Pos_Fun_0008, 0011, 0012)
- ✅ **Requests & Assistance** - Polite requests and helpful communication (Pos_Fun_0006, 0007, 0013)
- ✅ **Business Communication** - Email composition, meetings, document handling (Pos_Fun_0012, 0013, 0015)
- ✅ **Travel Planning** - Trip coordination and decision-making scenarios (Pos_Fun_0014)
- ✅ **Time & Scheduling** - Appointment handling and time-based instructions (Pos_Fun_0015)
- ✅ **Daily Language Usage** - Conversational phrases and idioms (Pos_Fun_0009, 0010)
- ✅ **Extended Text** - Longer narratives and complex multi-sentence translations
- ✅ **Various Tenses** - Present, past, and future tense handling
- ✅ **Mixed Content** - Singlish with embedded English terms (ASAP, IT, PM, etc.)

### Negative Functional Tests (9 scenarios)
The negative tests validate system behavior with challenging or edge-case inputs:

1. **Neg_Fun_0001** - Standard Singlish Input with repeated words
2. **Neg_Fun_0002** - English Slang Persistence and exclamation mark handling
3. **Neg_Fun_0003** - Technical Terminology and abbreviation handling
4. **Neg_Fun_0004** - Numbers mixed with Singlish characters
5. **Neg_Fun_0005** - Version numbers and file references
6. **Neg_Fun_0006** - Repetitive input simplification
7. **Neg_Fun_0007** - Date format handling and Google Maps references
8. **Neg_Fun_0008** - Multiple punctuation marks normalization
9. **Neg_Fun_0009** - Complex multi-sentence project discussion scenario

### UI Test (1 scenario)
- 🖥️ **Pos_UI_0001**: UI Responsiveness and Output Visibility
  - Validates that UI remains responsive when focus changes
  - Ensures translated output stays visible after focus changes
  - Confirms input field retains the typed text (UI persistence)

---

## Configuration Details

The project is configured in `playwright.config.js` with the following settings:

| Setting | Value | Purpose |
|---------|-------|---------|
| **Base URL** | https://www.swifttranslator.com/ | Website under test |
| **Test Timeout** | 120 seconds | Maximum time per test |
| **Expectation Timeout** | 15 seconds | Wait time for assertions |
| **Headless Mode** | Disabled | Browser visible for debugging |
| **Viewport** | 1280 x 720 | Standard desktop resolution |
| **Screenshots** | On failure | Visual debugging aid |
| **Videos** | On failure | Session recording |
| **Workers** | 1 | Sequential test execution |
| **Action Timeout** | 20 seconds | Timeout for click/fill actions |
| **Navigation Timeout** | 30 seconds | Page load timeout |

---

## Troubleshooting

### Issue: "npx: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue: Tests timeout or fail
**Solution**: Increase timeout values in `playwright.config.js`:
```javascript
timeout: 180 * 1000, // 3 minutes
expect: {
  timeout: 20000, // 20 seconds
}
```

### Issue: "Element not found" errors
**Solution**: 
- Website structure may have changed
- Update selectors in test files to match current HTML
- Run in headed mode to see actual page content: `npx playwright test --headed`

### Issue: npm install fails
**Solution**: Clear cache and reinstall:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Issue: Browser download fails
**Solution**: Manually install browsers:
```bash
npx playwright install chromium
npx playwright install firefox
npx playwright install webkit
```

### Issue: Tests pass locally but fail on CI/CD
**Solution**:
- Check internet connectivity
- Verify Swift Translator website is accessible
- Ensure browser dependencies are installed on CI/CD server
- Increase timeouts for slower environments

---

## Important Notes

1. **Internet Connection Required**: Tests require active internet to access the Swift Translator website.

2. **Website Availability**: Tests may fail if https://www.swifttranslator.com/ is down or under maintenance.

3. **Element Selectors**: Tests use role-based selectors that target the input textbox with name "Input Your Singlish Text Here."

4. **Test Independence**: Each test runs independently, clearing previous inputs before execution.

5. **Sequential Execution**: Tests run one at a time (workers: 1) to prevent connection lag on the website.

6. **Input Method**: Tests use `pressSequentially()` with a 35-60ms delay between keystrokes to properly trigger the website's translation engine.

---

## Running Tests with Different Options

### Run with Debugging
```bash
npx playwright test --headed --debug
```

### Run with Verbose Output
```bash
npx playwright test --reporter=list
```

### Run with Custom Timeout
```bash
npx playwright test --timeout 180000
```

### Run on Specific Browser (if configured)
```bash
npx playwright test --project=chromium
```

---

## Test Execution Results

Test results are available in multiple formats:

- **Console Output**: Real-time test execution logs
- **HTML Report**: Interactive report with screenshots/videos (`npx playwright show-report`)
- **Test Results Directory**: Individual test artifacts in `test-results/` folder

### Viewing Reports
```bash
# View the most recent HTML report
npx playwright show-report
```

---

## Repository Information

- **Repository URL**:https://github.com/BANDARAOG/ITPM-Assignment1-Playwright-Automation
- **Repository Type**: Public (publicly accessible)
- **Anyone can**: View code, clone repository, download files, and run tests following instructions

---

## Playwright Framework Information

- **Framework**: Playwright
- **Current Version**: 1.58.1 (or higher)
- **Documentation**: https://playwright.dev/
- **Supported Browsers**: Chromium, Firefox, WebKit

### Key Playwright Features Used in This Project
- Automatic wait mechanisms
- Element selection by role
- Sequential keyboard input
- Screenshot and video capture
- HTML test reports
- Headless and headed modes

---

## Dependencies

```json
{
  "devDependencies": {
    "@playwright/test": "^1.58.1"
  }
}
```

To update Playwright:
```bash
npm install @playwright/test@latest
```

---

## Additional Resources

- **Playwright Documentation**: https://playwright.dev/
- **Playwright Best Practices**: https://playwright.dev/docs/best-practices
- **Swift Translator Website**: https://www.swifttranslator.com/
- **Node.js Download**: https://nodejs.org/
- **GitHub Repository**: https://github.com/BANDARAOG/ITPM-Assignment1-Playwright-Automation
---

## Quick Start Guide

For quick execution:

```bash
# 1. Clone or download the repository
git clone https://github.com/BANDARAOG/ITPM-Assignment1-Playwright-Automation.git
cd ITPM-Assignment1-Playwright-Automation

# 2. Install everything
npm install
npx playwright install

# 3. Run all tests with visible browser
npx playwright test --headed

# 4. View detailed report
npx playwright show-report
```

---

## Assignment Requirements Checklist

- ✅ 24 positive functional test scenarios
- ✅ 9 negative functional test scenarios  
- ✅ 1 UI-related test scenario
- ✅ All scenarios automated using Playwright
- ✅ Test results documented with evidence
- ✅ Git repository is publicly accessible
- ✅ Clear installation and execution instructions provided
- ✅ Comprehensive README file

---

## Author Information

**Registration Number**: IT23317758  
**Course**: IT3040 - ITPM  
**Assignment**: Assignment 1 - Automated Testing  
**Institution**: SLIIT (Sri Lanka Institute of Information Technology)  
**Academic Year**: Year 3, Semester 2

---

## Submission Details

**Assignment**: Assignment 1  
**Due Date**: 1st February 2026  
**Submission Method**: CourseWeb

---

## Notes for Evaluators

1. All 34 test cases are automated and executable
2. Each test includes proper error handling and assertions
3. Test reports include visual evidence (screenshots/videos on failure)
4. Project follows Playwright best practices
5. Code is well-commented and maintainable
6. Instructions are clear and sufficient for reproduction

---

**Last Updated**: January 2026  
**Project Status**: Complete and Ready for Evaluation