import React, {propTypes} from 'react';
import mathJs from 'mathjs';

const ERR_DIV = "Cannot divide by 0";

export default class FractionSum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            second: '',
            third: '',
            forth: '',
            answerFranctionSum: '',
        }
    }

    calculateFractionSum() {
        var first = this.state.first;
        var second = this.state.second;
        var third = this.state.third;
        var forth = this.state.forth;
        
        if (second == 0 || forth == 0) {
            this.setState({
                answerFranctionSum: ERR_DIV
            })
        } else {
            var answer = mathJs.add(mathJs.fraction(`${first}/${second}`), mathJs.fraction(`${third}/${forth}`));
            var answerToString = answer.n + "/" + answer.d
            this.setState ({
                answerFranctionSum: answerToString
            })
        }
    }

    render() {
        return (
                <form className="form-inline" name="fractionSum">
                    <div className="form-group" style={{justifyContent: 'center', alignItems: 'center'}}>
                        <label style={{margin: 20}}>First Value : </label>
                        <input onChange={(event) => this.setState({
                            first: event.target.value
                        })} maxLength="2" className="form-control" id="first" style={{
                            width: 50,
                            marginLeft: 10
                        }} type="text"/>
                        <span style={{marginLeft: 10, fontSize: 20}}>/</span>
                        <input onChange={(event) => this.setState({
                            second: event.target.value
                        })} maxLength="2" className="form-control" id="second" style={{
                            width: 50,
                            marginLeft: 10
                        }} type="text"/>
                    </div>
                    <div className="form-group" style={{justifyContent: 'center', alignItems: 'center'}}>
                        <span style={{marginLeft: 20, fontSize: 40}}>+</span>
                    </div>    
                    <div className="form-group" style={{justifyContent: 'center', alignItems: 'center'}}>
                        <label style={{margin: 20}}>Second Value : </label>
                        <input onChange={(event) => this.setState({
                            third: event.target.value
                        })} maxLength="2" className="form-control" id="third" style={{
                            width: 50,
                            marginLeft: 10
                        }} type="text"/>
                        <span style={{marginLeft: 10, fontSize: 20}}>/</span>
                        <input onChange={(event) => this.setState({
                            forth: event.target.value
                        })} maxLength="2" className="form-control" id="forth" style={{
                            width: 50,
                            marginLeft: 10
                        }} type="text"/>
                    </div>
                    <button id="sumFractionButton" onClick={this.calculateFractionSum.bind(this)} type="button" style={{margin: 10}} className="btn btn-primary">Calculate</button>
                    { this.state.answerFranctionSum != '' ?
                        <label style={{marginLeft: 20}}>Answer: {this.state.answerFranctionSum}</label>
                        :
                        null
                    }
                </form>
        );
    }
}