import React from 'react';
import TabsRmes from 'js/components/shared/tabs-rmes';
import ConceptsSummary from './concepts/summary';
import ConceptsCreations from './concepts/creations';
import ConceptsModifications from './concepts/modifications';
import CollectionsSummary from './collections/summary';
import CollectionsCreations from './collections/creations';
import CollectionsModifications from './collections/modifications';

function ConceptsDashboard({ conceptsData }) {
	const tabsConcepts = [
		{
			title: 'Récapitulatif',
			content: <ConceptsSummary conceptsData={conceptsData} />,
		},
		{
			title: 'Liste des créations',
			content: <ConceptsCreations conceptsData={conceptsData} />,
		},
		{
			title: 'Liste des modifications',
			content: <ConceptsModifications conceptsData={conceptsData} />,
		},
	];
	const tabsCollections = [
		{ title: 'Récapitulatif', content: <CollectionsSummary /> },
		{ title: 'Liste des créations', content: <CollectionsCreations /> },
		{ title: 'Liste des modifications', content: <CollectionsModifications /> },
	];
	const tabs = [
		{ title: 'Concepts', content: <TabsRmes tabs={tabsConcepts} /> },
		{ title: 'Collections', content: <TabsRmes tabs={tabsCollections} /> },
	];
	return <TabsRmes tabs={tabs} />;
}

export default ConceptsDashboard;