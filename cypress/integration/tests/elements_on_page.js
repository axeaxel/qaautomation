describe('elements interraction on the page', function () {
	it('will interract with all the elements on the page', function () {

		//Visists the home page
		cy.visit('http://localhost:5000/')

		//Interract with filters for name, city, submit, clear, buttons for moving interviwers between the cycles of the interviewing process
		//Next step is to see the functionality of the buttons
		cy.get('body > #root > .App > #filters > #name').click()
		cy.get('body > #root > .App > #filters > #city').click()
		cy.get('body > #root > .App > #filters > button:nth-child(3)').click()
		cy.get('body > #root > .App > #filters > button:nth-child(4)').click()
		cy.get('.App-column > div > .CrewMember-container:nth-child(2) > .CrewMember-toolbar > .CrewMember-up').click()
		cy.get('.App-column:nth-child(2) > div > .CrewMember-container > .CrewMember-toolbar > .CrewMember-up').click()
		cy.get('.App-column:nth-child(3) > div > .CrewMember-container:nth-child(3) > .CrewMember-toolbar > button').click()
	})

})