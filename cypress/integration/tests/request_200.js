describe('Request header 200', function () {
	it('Access the home page check the rquest and header', function () {

		//Visits the home page
		cy.visit('http://localhost:5000/')
		cy.request('http://localhost:5000/')
		.should((response) => {
			expect(response.status).to.eq(200)
			expect(response.body).to.have.length(561)
			expect(response).to.have.property('headers')
			expect(response).to.have.property('duration')
		})
	})
})