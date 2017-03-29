import React, {propTypes} from 'react';
import mathJs from 'mathjs';
import Sum from './sum';
import FractionSum from './fractionSum';

export default class Calculation extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="foo" style={{padding: 30, justifyContent: 'center', alignItems: 'center'}}>
                <label style={{color: 'red'}}> SUM </label>
                <Sum />
                <label style={{color: 'red'}}> FRACTION SUM </label>
                <FractionSum />
            </div>
        )
    }
}