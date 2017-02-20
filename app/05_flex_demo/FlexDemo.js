/**
 * Created by Administrator on 2017/2/20.
 */

import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";

export default class FlexDemo extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }


    render() {
        return (
            <View style={FlexDiceTestStyle.container}>
                <View style={FlexDiceTestStyle.container1}>
                <Text style={FlexDiceTestStyle.pic1}>图片</Text>

                    <Text style={FlexDiceTestStyle.item1}>1</Text>
                    <Text style={FlexDiceTestStyle.item2}>2</Text>
                    <Text style={FlexDiceTestStyle.item3}>3</Text>
                <Text style={FlexDiceTestStyle.pic2}>图片</Text>

                </View>
                <Text style={FlexDiceTestStyle.item4}>66666</Text>
                <Text style={FlexDiceTestStyle.item5}>5</Text>
                <Text style={FlexDiceTestStyle.item6}>6</Text>
                <Text style={FlexDiceTestStyle.item7}>7</Text>
                <Text style={FlexDiceTestStyle.item8}>8</Text>
                <Text style={FlexDiceTestStyle.item9}>9</Text>

            </View>

        )
    }
}

const FlexDiceTestStyle = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        alignItems: 'center',
    },
    container1: {
        backgroundColor: '#892821',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    container2: {
        flexGrow:1,
        backgroundColor: '#123432',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    pic1: {
        includeFontPadding:false,
        textAlignVertical:'center',
        justifyContent:'flex-start',
        height: 40,
        width: 40,

    },
    pic2: {
        textAlign: 'center',
        includeFontPadding:false,
        textAlignVertical:'center',
        justifyContent:'flex-end',
        height: 40,
        width: 40,

    },
    item1: {},
    item2: {},
    item3: {},
    item4: {},
    item5: {},
    item6: {},
    item7: {},
    item8: {},
    item9: {},
});