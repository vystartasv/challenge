import React from 'react';
class DriverDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                <button
                    type="button"
                    onClick={this.handleClick}>
                    Toggle driver details
                </button>
                <div></div>
                <label className="details">{this.state.isToggleOn ? `Races: 314, Titles: 2, Poles: 22` : null}</label>
            </div>
        );
    }
}
export default DriverDetails;
