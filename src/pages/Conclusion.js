import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"

import { Container } from "@material-ui/core"

const useStyles = makeStyles({
	root: {
		textAlign: "center"
	},
	list: {
		listStyleType: "none",
		padding: 0
	}
})

export default function Conclusion(props) {
	const classes = useStyles()
	const t = props.useTranslation()

	return (
		<div className="section">
			<h1 className={classes.root}>{props.title}</h1>
			<Container className={classes.root}>
				<h2>{t("content.conclusion.pros.title")}</h2>
				<ul className={classes.list}>
					<li>{t("content.conclusion.pros.easy_learn")}</li>
					<li>{t("content.conclusion.pros.vdom")}</li>
					<li>{t("content.conclusion.pros.reusable_components")}</li>
					<li>{t("content.conclusion.pros.one_way_data_flow")}</li>
					<li>{t("content.conclusion.pros.seo")}</li>
				</ul>

				<h2>{t("content.conclusion.cons.title")}</h2>
				<ul className={classes.list}>
					<li>{t("content.conclusion.cons.jsx")}</li>
					<li>{t("content.conclusion.cons.fast_development")}</li>
					<li>{t("content.conclusion.cons.slow_documentation")}</li>
				</ul>
			</Container>
		</div>
	)
}