import * as yup from "yup";

export default yup.object().shape({
	firstName: yup
		.string()
		.required("* Should be a valid first name.")
		.min(2, "* First name must be at least 2 characters long"),
	lastName: yup
		.string()
		.required("* Should be a valid last name.")
		.min(2, "* Last name must be at least 2 characters long"),
	email: yup
		.string()
		.email("* Should be a valid email address.")
		.required("* Email is required"),
	password: yup
		.string()
		.required("* Should be a valid password.")
		.min(8, "* Password must be at least 8 characters long"),
	termsAgreed: yup
		.boolean()
		.required("* You must agree to the Terms of Service")
		.oneOf([true], "* You must agree to the Terms of Service"),
});
