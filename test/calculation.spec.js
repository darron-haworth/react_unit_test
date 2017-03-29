import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Calculation from '../lib/calculation';
import Sum from '../lib/sum';
import FractionSum from '../lib/fractionSum';

describe('<Calculation />', function () {
    it('Contains Sum and FractionSum Component', function() {
        expect(shallow(<Calculation />).contains(<Sum />)).to.equal(true);
        expect(shallow(<Calculation />).contains(<FractionSum />)).to.equal(true);
    });

    it('Contains className=".foo"', function() {
        expect(shallow(<Calculation />).is('.foo')).to.equal(true);
    });

    it('className=".foo" length should be 1', function() {
        expect(mount(<Calculation />).find('.foo').length).to.equal(1);
    });
})

