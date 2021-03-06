import React from 'react';
import { Note } from 'js/components/shared/note';
import './relations.css';
import { Link } from 'react-router-dom';

function RelationsViewPerLg({
	children,
	childrenTitle,
	childrenPath,
	parent,
	parentTitle,
	parentPath,
	title,
	secondLang,
	currentLang,
	langSuffix,
}) {
	return (
		<Note
			text={
				<React.Fragment>
					{parent && (
						<p>
							<span className="linksTitle">{parentTitle}:</span>
							<Link to={`/operations/${parentPath}/${parent.id}`}>
								{parent[`label${langSuffix}`]}
							</Link>
						</p>
					)}
					{children && (
						<div>
							<p>
								<span className="linksTitle">{childrenTitle}:</span>
							</p>
							<ul>
								{children
									.sort(function(a, b) {
										return a[`label${langSuffix}`].localeCompare(
											b[`label${langSuffix}`]
										);
									})
									.map(item => (
										<li>
											<Link to={`/operations/${childrenPath}/${item.id}`}>
												{item[`label${langSuffix}`]}
											</Link>
										</li>
									))}
							</ul>
						</div>
					)}
				</React.Fragment>
			}
			title={title}
			lang={currentLang}
			alone={!secondLang}
			allowEmpty={true}
		/>
	);
}

function RelationsView(props) {
	return (
		<div className="row">
			<RelationsViewPerLg
				{...props}
				langSuffix="Lg1"
				currentLang={props.langs.lg1}
			/>
			{props.secondLang && (
				<RelationsViewPerLg
					{...props}
					langSuffix="Lg2"
					currentLang={props.langs.lg2}
				/>
			)}
		</div>
	);
}

export default RelationsView;
