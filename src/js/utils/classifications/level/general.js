import { buildPropTypes, buildEmpty } from 'js/utils/build-general-proptypes';

export const fieldsWithRequired = [
	['prefLabelLg1', true],
	['prefLabelLg2', false],
	['notation', false],
	['depth', false],
	['notationPattern', false],
	['broaderLg1', false],
	['broaderLg2', false],
	['idBroader', false],
	['narrowerLg1', false],
	['narrowerLg2', false],
	['idNarrower', false],
];

export const propTypes = buildPropTypes(fieldsWithRequired);

export const empty = () => buildEmpty(fieldsWithRequired);
