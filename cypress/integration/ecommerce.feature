# Step 1 : Before creating feature file, run command "npm install @badeball/cypress-cucumber-preprocessor" and add cucumber extension from vs code

Feature: End to End Ecommerce validation

#step 11: Adding test type attributes
@Regression
Scenario: Ecommerce products delivery
Given I am on Ecommerce page
When I login to the application
And I add items to cart and checkout
And Validate the total price limit
Then Select the country submit and verify Thankyou

# Step 9 : Creating feature file with parameterized data
@Smoke
Scenario: Ecommerce products delivery
Given I am on Ecommerce page
When I login to the application portal
| username    | password |
| rahulshettyacademy | learning |
And I add items to cart and checkout
And Validate the total price limit
Then Select the country submit and verify Thankyou
