import test, { expect } from "@playwright/test";

const testUser = {
    name: 'Tõnu Tõukab',
    email: 'tonu@tonu.ee',
    password: 'tonu123',
    confirmedPassword:'tonu123',
    gender:'female',
    age:'50',
    termsAndConditions: 'Yes',
    newsletterSubscription: 'No',
    deposit:'50',
}

test('User can register succesfully', async ({ page }) => {
    await page.goto('http://localhost:5173');
    const registrationForm = page.getByTestId('registration-form-container');
    await expect(registrationForm).toBeVisible();

    await page.getByTestId('registration-full-name').fill(testUser.name);
    await page.getByTestId('registration-email').fill(testUser.email);
    await page.getByTestId('registration-password').fill(testUser.password);
    await page.getByTestId('registration-confirm-password').fill(testUser.confirmedPassword);
   
    const genderSelection = page.getByTestId('registration-gender-radio')
    await genderSelection.getByTestId('registration-gender-female').click();

    await page.getByTestId('registration-select-age').selectOption({ value: testUser.age });

    const depositSelection = page.getByTestId('registration-deposit-selection');
    await depositSelection.getByTestId('registration-deposit-button-50').click();
    await page.getByTestId('registration-checkbox-terms-conditions').click()
    await page.getByTestId('registration-button-submit').click();

    await expect(page).toHaveURL(/.*\/registration-success/);

    await expect(page.getByTestId('registration-success-container')).toBeVisible();
    await expect(page.getByTestId('registration-success-full-name')).toContainText(testUser.name);
    await expect(page.getByTestId('registration-success-email')).toContainText(testUser.email);
    await expect(page.getByTestId('registration-success-password')).toContainText(testUser.password);
    await expect(page.getByTestId('registration-success-newsletter')).toContainText(testUser.newsletterSubscription);
    await expect(page.getByTestId('registration-success-terms-conditions')).toContainText(testUser.termsAndConditions);
    await expect(page.getByTestId('registration-success-gender')).toContainText(testUser.gender);
    await expect(page.getByTestId('registration-success-age')).toContainText(testUser.age);
    await expect(page.getByTestId('registration-success-deposit')).toContainText(testUser.deposit);
});

test('User is not able to register without accepting T&C', async ({ page }) => {
    await page.goto('http://localhost:5173');
    const registrationForm = page.getByTestId('registration-form-container');
    await expect(registrationForm).toBeVisible();

    await page.getByTestId('registration-full-name').fill(testUser.name);
    await page.getByTestId('registration-email').fill(testUser.email);
    await page.getByTestId('registration-password').fill(testUser.password);
    await page.getByTestId('registration-confirm-password').fill(testUser.confirmedPassword);
   
    const genderSelection = page.getByTestId('registration-gender-radio')
    await genderSelection.getByTestId('registration-gender-female').click();

    await page.getByTestId('registration-select-age').selectOption({ value: testUser.age });

    const depositSelection = page.getByTestId('registration-deposit-selection');
    await depositSelection.getByTestId('registration-deposit-button-50').click();
    await page.getByTestId('registration-button-submit').click();

    await expect(page.getByTestId('registration-error')).toBeVisible();
});

test('Age input should not accept values under 21', async({ page }) => {
    await page.goto('http://localhost:5173');
    const registrationForm = page.getByTestId('registration-form-container');
    await expect(registrationForm).toBeVisible();

    const ageDropdown = page.getByTestId('registration-select-age');
    const ageOptions = await ageDropdown.locator('option').allInnerTexts();

    const ageValues = ageOptions.map(age => Number(age));
    const invalidAges = ageValues.filter(age => age < 21);

    expect(invalidAges.length).toBe(0);
});

test('User should not be able to register without a deposit', async({ page }) => {
    await page.goto('http://localhost:5173');
    const registrationForm = page.getByTestId('registration-form-container');
    await expect(registrationForm).toBeVisible();

    await page.getByTestId('registration-full-name').fill(testUser.name);
    await page.getByTestId('registration-email').fill(testUser.email);
    await page.getByTestId('registration-password').fill(testUser.password);
    await page.getByTestId('registration-confirm-password').fill(testUser.confirmedPassword);
   
    const genderSelection = page.getByTestId('registration-gender-radio')
    await genderSelection.getByTestId('registration-gender-female').click();

    await page.getByTestId('registration-select-age').selectOption({ value: testUser.age });

    await page.getByTestId('registration-checkbox-terms-conditions').click()
    await page.getByTestId('registration-button-submit').click();

    await expect(page.getByTestId('registration-error')).toBeVisible();
});


