describe("User Onboarding app", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	const firstNameInput = () => cy.get('input[name="firstName"]');
	const lastNameInput = () => cy.get('input[name="lastName"]');
	const emailInput = () => cy.get('input[name="email"]');
	const passwordInput = () => cy.get('input[name="password"]');
	const termsCheckbox = () => cy.get('input[name="termsAgreed"]');
	const submitBtn = () => cy.get('button[type="submit"]');

	const emptyElements = [
		firstNameInput,
		lastNameInput,
		emailInput,
		passwordInput,
	];

	it("Can type in both first and last name fields", () => {
		firstNameInput()
			.should("exist")
			.type("First")
			.should("have.value", "First");
		lastNameInput()
			.should("exist")
			.type("Last")
			.should("have.value", "Last");
	});

	it("Can type in an email address and a password", () => {
		emailInput()
			.should("exist")
			.type("testing@test.com")
			.should("have.value", "testing@test.com");
		passwordInput()
			.should("exist")
			.type("Password123")
			.should("have.value", "Password123");
	});

	it("Can check and uncheck the terms of services checkbox", () => {
		termsCheckbox()
			.should("exist")
			.check()
			.should("be.checked")
			.uncheck()
			.should("not.be.checked");
	});

	it("Can submit the form data after succesfully entering everything", () => {
		firstNameInput().type("First");
		lastNameInput().type("Last");
		emailInput().type("testing@test.com");
		passwordInput().type("Password123");
		termsCheckbox().check();
		submitBtn().click();
		emptyElements.map((elem) => elem().should("be.empty"));
	});
});
