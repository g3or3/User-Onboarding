import React from "react";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	tos: {
		display: "flex",
		justifyContent: "center",
	},
	users: {
		marginTop: theme.spacing(8),
		border: "2px solid black",
	},
}));

export default function Users(props) {
	const classes = useStyles();

	const { users } = props;

	return (
		<Container
			maxWidth="sm"
			style={{
				border: "2px solid black",
			}}
		>
			{users.map((user, idx) => {
				return (
					<div key={idx}>
						<Avatar className={classes.avatar}>
							<AccountCircleIcon />
						</Avatar>
						<div>
							{user.firstName}
							<br></br>
							{user.lastName}
							<br></br>
							{user.email}
							<br></br>
						</div>
					</div>
				);
			})}
		</Container>
	);
}
