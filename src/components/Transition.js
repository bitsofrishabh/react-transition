import React, { Component } from 'react';
import '../css/App.css';
import Transition from 'react-transition-group/Transition';

class TransitionComp extends Component {

    state = {
        show: false
    }

    showDiv = () => {
        this.setState({
            show: !this.state.show ? true : false
        })
    }

    render() {
        return (
            <div>
                <Transition
                    in={this.state.show}
                    timeout={{
                        enter:2000,
                        exit:50,
                    }} >
                    {
                        state => <div className={`square square-${state}`}>
                            {`square square-${state}`}

                        </div>
                    }

                </Transition>
                {/* {
                    this.state.show ?
                        <div style={{ background: 'red', height:100 }}> H</div> : null
                } */}
                <div className="showDiv"
                    onClick={this.showDiv}
                >
                    show or hide
                </div>

            </div>



        )
    }
}


export default TransitionComp;