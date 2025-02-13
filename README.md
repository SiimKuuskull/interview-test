# Technical Interview

Our developer has been working on creating a registration page for company's new exciting campaign. They have asked you to manually test the registration flow and create automated tests. They have also attached a list of requirements that should be working as expected. 

You can check `package.json` for available commands to run with `npm run <script-name>`.  
To setup the project, please make sure you have [nodejs](https://nodejs.dev/) installed, then run `npm install` && `npm run build` 


# Registration page requirements:
- User can register themselves to the campaign
This means all the input fields must be visible and usable:
Name, Email, Password, Password confirmation, Gender, Age, deposit buttons, checkboxes(subscription to our newsletter and T&C)
- User must enter a valid name
- User must have a valid email
- User can select their gender
- User must be in an age range of 21 to 99
- User must place a deposit of pre-defined amount of 50,100 or 150 euros
- User must agree to the campaign's terms&conditions
- Should redirect to registration success page

# Registration success page requirements
- Should display a success message when registration is succesful
- All the user's info should be visible and correct.
- There should be a button to return to the registration page and it should redirect to the registration page

# Automation
- Create one positive test case for complete registration flow.
- When/if you counter any bugs, cover these cases also with automated tests.
