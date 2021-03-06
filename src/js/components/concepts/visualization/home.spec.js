import React from 'react';
import { shallow } from 'enzyme';
import ConceptVisualization from './home';
import { empty } from 'js/utils/concepts/general';

describe('concept-visualization', () => {
	it('renders without crashing', () => {
		shallow(
			<ConceptVisualization
				id="id"
				general={empty()}
				notes={{}}
				links={[]}
				stampList={[]}
				disseminationStatusList={[]}
				validateConcept={() => console.log('validate')}
				secondLang={true}
				saveSecondLang={() => console.log('save second lang')}
				langs={{ lg1: 'fr', lg2: 'en' }}
				permission={{ authType: '', roles: [''] }}
			/>
		);
	});
});
