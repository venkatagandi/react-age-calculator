import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from '../components/AgeStats';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newDate: ' ',
            birthday:'1986-02-02',
            showStats: false
        }
    }

    onChangeBirthDate() {
        console.log(this.state);
        this.setState({birthday: this.state.newDate,showStats:true});
    }
    render() {
        return (
            <div className="App">
                <Form inline>
                    <h2>Input your Birth Date!</h2>
                    <FormControl type="date" onChange={ event => this.setState({ newDate: event.target.value })}>
                    </FormControl>
                    { '  ' }
                    <Button  onClick={() => this.onChangeBirthDate()}>Submit</Button>

                    {this.state.showStats  ?
                        <div className="fade age-stats"><AgeStats date={this.state.birthday} /></div>
                         : <div></div>}

                </Form>
            </div>
        );
    }
}

export default App;