import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";
import NewUserForm from "./NewUserForm";
import Users from "./Users";
import axios from "axios";
import schema from "./formSchema";
import * as yup from "yup";

const initialFormValues = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	termsAgreed: false,
};

function App() {
	const [users, setUsers] = useState([]);
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState();
	const [disabled, setDisabled] = useState(true);

	const postNewUser = (newUser) => {
		axios
			.post("https://reqres.in/api/users", newUser)
			.then((res) => {
				setUsers([res.data, ...users]);
				setFormValues(initialFormValues);
				setDisabled(true);
			})
			.catch((err) => console.log(err));
	};

	const inputChange = (name, value) => {
		yup.reach(schema, name)
			.validate(value)
			.then(() => {
				setFormErrors({
					...formErrors,
					[name]: "",
				});
			})
			.catch((err) => {
				setFormErrors({
					...formErrors,
					[name]: err.errors[0],
				});
			});
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const formSubmit = () => {
		const newUser = {
			firstName: formValues.firstName.trim(),
			lastName: formValues.lastName.trim(),
			email: formValues.email.trim(),
			password: formValues.password.trim(),
			termsAgreed: formValues.termsAgreed,
		};
		postNewUser(newUser);
	};

	useEffect(() => {
		schema.isValid(formValues).then((valid) => {
			setDisabled(!valid);
		});
	}, [formValues]);

	return (
		<Grid
			container
			justify="center"
			alignItems="center"
			style={{ minHeight: "100vh" }}
		>
			<NewUserForm
				values={formValues}
				change={inputChange}
				submit={formSubmit}
				disabled={disabled}
				errors={formErrors}
			/>
			<Users users={users} />
		</Grid>
	);
}

export default App;