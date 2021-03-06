import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import loadFamily, { saveFamily } from 'js/actions/operations/families/item';
import * as select from 'js/reducers';
import { connect } from 'react-redux';
import buildExtract from 'js/utils/build-extract';
import Loading from 'js/components/shared/loading';
import OperationsFamilyEdition from 'js/components/operations/families/edition/edition';

const extractId = buildExtract('id');

class OperationsFamilyEditionContainer extends Component {
	componentWillMount() {
		if (!this.props.family.id) {
			this.props.loadFamily(this.props.id);
		}
	}
	render() {
		if (!this.props.family)
			return <Loading textType="loading" context="operations" />;
		return <OperationsFamilyEdition {...this.props} />;
	}
}

const mapDispatchToProps = {
	loadFamily,
	saveFamily,
};

const mapStateToProps = (state, ownProps) => {
	const id = extractId(ownProps);
	const family = select.getFamily(state, id);
	const langs = select.getLangs(state);
	return {
		id,
		family,
		langs,
	};
};

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(OperationsFamilyEditionContainer)
);
