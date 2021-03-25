import * as yup from "yup";

export default yup.object().shape({
	firstName: yup
		.string()
		.required("Name is required")
		.min(2, "Name must be at least 2 characters long"),
	lastName: yup
		.string()
		.required("Name is required")
		.min(2, "Name must be at least 2 characters long"),
	email: yup
		.string()
		.email("Must be a valid email")
		.required("Email is required"),
	password: yup
		.string()
		.required("Name is required")
		.min(8, "Name must be at least 8 characters long"),
	termsAgreed: yup
		.boolean()
		.required("You must agree to the Terms of Service")
		.oneOf([true], "You must agree to the Terms of Service"),
});
