import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockIcon from "@material-ui/icons/LockOpenTwoTone";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./useStyles";

export default function NewUserForm(props) {
	const classes = useStyles();

	const { values, submit, change, disabled, errors } = props;

	const errorKeys = Object.keys(errors);

	const onSubmit = (event) => {
		event.preventDefault();
		submit();
	};

	const onChange = (event) => {
		const { name, value, type, checked } = event.target;
		const valueToUse = type === "checkbox" ? checked : value;
		change(name, valueToUse);
	};

	return (
		<Container
			maxWidth="xs"
			style={{ backgroundColor: "white", borderRadius: "20px" }}
		>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} onSubmit={onSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoFocus
								variant="outlined"
								label="First Name"
								autoComplete="fname"
								fullWidth
								value={values.firstName}
								name="firstName"
								type="text"
								onChange={onChange}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								label="Last Name"
								autoComplete="fname"
								fullWidth
								value={values.lastName}
								name="lastName"
								type="text"
								onChange={onChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								label="Email Address"
								autoComplete="fname"
								fullWidth
								value={values.email}
								name="email"
								type="text"
								onChange={onChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								label="Password"
								autoComplete="fname"
								fullWidth
								value={values.password}
								name="password"
								type="password"
								onChange={onChange}
							/>
						</Grid>
						<Grid className={classes.errors} item xs={10}>
							{errorKeys.map((key, idx) => {
								return <div key={idx}>{errors[key]}</div>;
							})}
						</Grid>
						<Grid className={classes.tos} item xs={12}>
							<FormControlLabel
								control={
									<Checkbox
										name="termsAgreed"
										checked={values.termsAgreed}
										onChange={onChange}
									/>
								}
								label="I Agree to the Terms of Service"
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						disabled={disabled}
					>
						Sign Up
					</Button>
				</form>
			</div>
		</Container>
	);
}
