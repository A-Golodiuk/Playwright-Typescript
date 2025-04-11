# Playwright-Typescript

A boilerplate project for end-to-end testing using [Playwright](https://playwright.dev/) and TypeScript. This setup follows the Page Object Model (POM) design pattern to promote modularity and maintainability in test automation.

## 📁 Project Structure

```
├── PageObjects/           # Page Object Model classes
├── tests/                 # Test specifications
├── playwright.config.ts   # Playwright configuration
├── package.json           # Project metadata and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/A-Golodiuk/Playwright-Typescript.git
   cd Playwright-Typescript
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Install Playwright browsers:**

   ```bash
   npx playwright install
   ```

## 🔪 Running Tests

Execute all tests using the following command:

```bash
npx playwright test
```

## 🛠 Configuration

Customize your testing environment by modifying the `playwright.config.ts` file. Key configurations include:

- **Test directory:** Specify where your test files are located.
- **Timeouts:** Set global timeouts for tests.
- **Browsers:** Define which browsers to run tests against.
- **Reporters:** Configure test result reporters.

For detailed configuration options, refer to the [Playwright Configuration Documentation](https://playwright.dev/docs/test-configuration).

## 📦 Scripts

The `package.json` file includes the following scripts:

- **Run tests:**

  ```bash
  npm test
  ```

- **Run tests with UI:**

  ```bash
  npm run test:ui
  ```

- **Generate HTML report:**

  ```bash
  npm run test:report
  ```

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright TypeScript Setup Guide](https://playwright.dev/docs/test-typescript)
- [Playwright GitHub Repository](https://github.com/microsoft/playwright)




