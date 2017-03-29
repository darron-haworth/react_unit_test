import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Sum from '../lib/sumjsx';

describe('<Sum />', function() {
    it('Addition of :  0 + 0 =  Answer should be 0', function () {
        const wrapper = mount(<Sum />);
        wrapper.setState({firstValue : '0'});
        wrapper.setState({secondValue : '0'});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('answerSum')).to.equal('0')
    });

    it('Addition of :  3 + 4 =  Answer should be 7', function () {
        const wrapper = mount(<Sum />);
        wrapper.setState({firstValue : '3'});
        wrapper.setState({secondValue : '4'});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('answerSum')).to.equal('7')
    });

    it('Addition of :  -5 + -5 =  Answer should be -10', function () {
        const wrapper = mount(<Sum />);
        wrapper.setState({firstValue : '-5'});
        wrapper.setState({secondValue : '-5'});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('answerSum')).to.equal('-10')
    });

    it('Addition of :  -3 + 1 =  Answer should be -2', function () {
        const wrapper = mount(<Sum />);
        wrapper.setState({firstValue : '-3'});
        wrapper.setState({secondValue : '1'});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('answerSum')).to.equal('-2')
    });

    it('Addition of : -5 + 8 =  Answer should be 3', function () {
        const wrapper = mount(<Sum />);
        wrapper.setState({firstValue : '-5'});
        wrapper.setState({secondValue : '8'});
        wrapper.find('button').simulate('click');
        expect(wrapper.state('answerSum')).to.equal('3')
    });
});