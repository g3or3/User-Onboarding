const initialFormValues = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	termsAgreed: false,
};

const initialFormErrors = {
	firstName: "* First name is required.",
	lastName: "* Last name is required.",
	email: "* Email address is required.",
	password: "* Password is required.",
	termsAgreed: "* You must agree to the Terms of Service.",
};

export { initialFormErrors, initialFormValues };
