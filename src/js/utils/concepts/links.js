import PropTypes from 'prop-types';
import {
	BROADER,
	NARROWER,
	REFERENCES,
	SUCCEED,
	RELATED,
	NONE,
} from 'js/constants';

const linkTypes = {
	[BROADER]: BROADER,
	[NARROWER]: NARROWER,
	[REFERENCES]: REFERENCES,
	[SUCCEED]: SUCCEED,
	[RELATED]: RELATED,
};

const propTypesKindOfLink = PropTypes.oneOf([
	BROADER,
	NARROWER,
	REFERENCES,
	SUCCEED,
	RELATED,
	NONE,
]);

//TODO Fix me, prop types should be only the shape, not the array
export const propTypes = PropTypes.arrayOf(
	PropTypes.shape({
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		typeOfLink: propTypesKindOfLink,
	})
);

export const propTypesBilingual = PropTypes.arrayOf(
	PropTypes.shape({
		id: PropTypes.string.isRequired,
		prefLabelLg1: PropTypes.string.isRequired,
		prefLabelLg2: PropTypes.string.isRequired,
		typeOfLink: propTypesKindOfLink,
	})
);

const getType = typeOfLink => {
	const type = linkTypes[typeOfLink];
	if (type) return type;
	throw new TypeError(
		`The type of a link was not recognized: \`${typeOfLink}\``
	);
};

export const mergeWithAllConcepts = (concepts, links) =>
	concepts.map(({ id, label }) => {
		const link = links.find(({ id: idLinked }) => idLinked === id);
		const typeOfLink = link ? getType(link.typeOfLink) : NONE;
		return {
			id,
			label,
			typeOfLink,
			prefLabelLg1: link && link.prefLabelLg1,
			prefLabelLg2: link && link.prefLabelLg2,
		};
	});
