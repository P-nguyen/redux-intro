import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tick } from '../actions';

class Clock extends Component {

    
    componentDidMount(){
        setInterval( ()=>{
            //designed to pass info to action creator
            this.props.tick(new Date().toLocaleTimeString());
        }, 1000);
    }

    render(){
        return (
            <div>
                <h3 className="text-center">{this.props.title}</h3>
            <h1 className="text-center">{this.props.time}</h1>
            <h2>{this.props.count}</h2>
            </div>
        );
    }
}

function mapStateToProps(state){

    return {
        time: state.clock.time,
        title: state.clock.header,
        count: state.user.count
    }
}

//connect checks provider store and pulls the index reducer obj
//{} deconstruction of tick same as tick: tick
export default connect(mapStateToProps, { tick })(Clock);