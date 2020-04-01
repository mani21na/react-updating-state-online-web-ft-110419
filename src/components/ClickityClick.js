import react, {Component} from 'React'

export default class ClickityClick extends Coponent {
    constructor() {
        super();
        this.state = {
            hasBeenClicked: false
        };
    }

    handleClick = () => {
        this.setState({
            hasBeenClicked: true
            }, () => console.log(this.state.hasBeenClicked)) // prints true
    }

    render() {
        <div>
            <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
            <button onClick={this.jandleClick}>Click me!</button>
        </div>
    }
}