# qaautomation
Test for QA Automation on a hiring personal app

app was acceseed via http://localhost:5000/

open cypress by using: ./node_modules/.bin/cypress open

more tests will need to be implemented to check the hiring process follows all the stages

at the moment there are a few bugs in the app like:
-filtering for the full name will not match any results back
-clearing the form, fields does not work, user needs to delete the input fields

//Check for the candidate moving to interviewing, hired, all step
//Check for the city to come up in the results
//Check for the full name should return results (failing, not finding the person by full name)	
//Checking the functionality of clear button (failing, not clearing the input fields)
