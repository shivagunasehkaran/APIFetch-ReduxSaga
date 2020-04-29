import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestAPIData } from './actions';
import Child from './Child';

class Home extends Component {

    render() {
        console.log("results", this.props.data);
        return (
            <View style={{ flex: 1, backgroundColor: 'green' }}>
                <Text style={{ margin: 100 }} onPress={() => this.props.requestAPIData()}>{'Get called'}</Text>
            </View>
        )
    }
};

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => {
    return {
        requestAPIData: () => { dispatch(requestAPIData()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);