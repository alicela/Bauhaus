import React from 'react';
import { shallow } from 'enzyme';
import SeriesHome from './home';
import PageTitle from 'js/components/shared/page-title';
import SearchRmes from 'js/components/shared/search-rmes';

describe('SeriesHome', () => {
	it('should display the PageTitle component', () => {
		const general = shallow(<SeriesHome series={[]} />);
		expect(general.find(PageTitle).length).toBe(1);
	});
	it('should display the SearchRmes component', () => {
		const general = shallow(<SeriesHome series={[]} />);
		expect(general.find(SearchRmes).length).toBe(1);
	});
});
