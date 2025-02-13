# Technical Interview

Our developer has been working on creating a registration page for the company's new and exciting campaign. They have asked you to manually test the registration flow and create automated tests. They have also attached a list of requirements that should be met.

You can check `package.json` for available commands to run with `npm run <script-name>`.  
To setup the project, please make sure you have [nodejs](https://nodejs.dev/) installed, then run `npm install` && `npm run build` 


# Registration Page Requirements:
Users must be able to register for the campaign. This means all input fields must be visible and usable:
- Name
- Email
- Password
- Password confirmation
- Gender selection
- Age input
- Deposit buttons (for selecting the deposit amount)
- Checkboxes (for subscribing to the newsletter and accepting Terms & Conditions)
- Users must enter a valid name.
- Users must provide a valid email address.
- Users must be able to select their gender.
- Users must be between the ages of 21 and 99.
- Users must make a deposit of a predefined amount: 50, 100, or 150 euros.
- Users must agree to the campaign's Terms & Conditions.
- Upon successful registration, users should be redirected to the registration success page.
# Registration Success Page Requirements:
- A success message should be displayed when registration is successful.
- All user information should be correctly displayed.
- There should be a button to return to the registration page, which must function correctly and redirect back to the registration page.
 # Automation:
- Create one positive test case covering the complete registration flow.
- If you encounter any bugs, write additional automated test cases to cover these scenarios.

