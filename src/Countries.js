import React from 'react';
class Countries extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.list
        };
        console.log(props);
    }
// console.log(this.state);
    render() {

          return (
              <div>p</div>

          );

    }
}
export default Countries;
