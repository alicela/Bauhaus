import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from 'js/components/shared/page-title';
import Controls from './controls';
import SearchRmes from 'js/components/shared/search-rmes';
import D from 'js/i18n';

const ClassificationTree = ({ items, subtitle, classificationId }) => {
	return (
		<div>
			<div className="container">
				<PageTitle
					title={D.classificationAllItemsTitle}
					subtitle={subtitle}
					context="classifications"
				/>
				<Controls />
				<div className="row">
					<div className="col-md-8 col-md-offset-2 centered">
						<SearchRmes
							items={items}
							childPath={`classifications/classification/${classificationId}/item`}
							context="classifications"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

ClassificationTree.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		}).isRequired
	),
	classificationId: PropTypes.string.isRequired,
};

export default ClassificationTree;