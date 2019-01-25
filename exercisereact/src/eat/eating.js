import React from 'react';
import EatCard from './eatcard';
import axios from 'axios';

class EatComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            eatstate: []
        }
    }
    componentWillMount() {
        this.getRemoveData()
    }
    getRemoveData() {
        axios.get("http://localhost:6789/all").then((response) => {
            console.log(response.data)
            console.log("Before")
            console.log(this.state.eatstate)
            this.setState({
                eatstate: response.data
            })
            console.log("After")
            console.log(this.state.eatstate)
        })
    }


    displayEatCard() {
        return this.state.eatstate.map((oneeat) => {
            return (
                <EatCard key={oneeat.id}
                    name={oneeat.title}
                    about={oneeat.about}
                    image={oneeat.image}
                    link={oneeat.link}
                ></EatCard>
            )
        })
    }
    render() {
        return (
            <div>
                <div class="row">
                    {this.displayEatCard()}
                </div>
            </div>
        );
    }
}

export default EatComponent;