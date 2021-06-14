describe('validation test', function() {

	it('checks for funcionlity of the app and validates it', function() {
		//Visits the home page
		cy.visit('http://localhost:5000/')

		//Check that searching for a city name in the name field will not return any results
		cy.get('body > #root > .App > #filters > #name').click()
		cy.get('body > #root > .App > #filters > #name').type('cardiff')
		cy.get('body > #root > .App > #filters > button:nth-child(3)').click()
		cy.get('.App-column:nth-child(1) > div > .CrewMember-container > .CrewMember-info > .CrewMemeber-photo').should('not.exist')
		cy.get('body > #root > .App > #filters > #name').clear()
		
		//Check for the first name to find results
		cy.get('body > #root > .App > #filters > #name').click()
		cy.get('body > #root > .App > #filters > #name').type('linda')
		cy.get('body > #root > .App > #filters > button:nth-child(3)').click()
		cy.get('div > .CrewMember-container > .CrewMember-info > .CrewMemeber-name').should('have.attr', 'linda ruiz')
		
		//Check for the candidate moving to interviewing, hired, all step
		//Check for the city to come up in the results
		//Check for the full name should return results (failing, not finding the person by full name)	
		//Checking the functionality of clear button (failing, not clearing the input fields)
	})
})
       