import React, { Component } from 'react';
import PageTitle from 'js/components/shared/page-title';
import PageSubtitle from 'js/components/shared/page-subtitle';
import Controls from './controls';
import General from './general';
import Notes from './notes';
import Levels from './levels';
import D from 'js/i18n';

class ClassificationVisualization extends Component {
	render() {
		const {
			classification: { general, levels },
			secondLang,
			langs,
		} = this.props;
		const notes = {
			scopeNoteLg1: general.scopeNoteLg1,
			scopeNoteLg2: general.scopeNoteLg2,
			changeNoteLg1: general.changeNoteLg1,
			changeNoteLg2: general.changeNoteLg2,
			descriptionLg1: general.descriptionLg1,
			descriptionLg2: general.descriptionLg2,
		};
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<label className="pull-right">
							<input
								type="checkbox"
								checked={secondLang}
								onChange={this.props.saveSecondLang}
							/>{' '}
							{D.displayLg2}
						</label>
					</div>
				</div>
				<PageTitle title={general.prefLabelLg1} context="classifications" />
				{general.prefLabelLg2 && (
					<PageSubtitle
						subtitle={general.prefLabelLg2}
						context="classifications"
					/>
				)}
				<Controls />
				<General general={general} secondLang={secondLang} langs={langs} />
				{notes.scopeNoteLg1 && (
					<Notes notes={notes} secondLang={secondLang} langs={langs} />
				)}
				{levels.length !== 0 && (
					<Levels
						levels={levels}
						classificationId={general.id}
						secondLang={secondLang}
					/>
				)}
			</div>
		);
	}
}

export default ClassificationVisualization;
