/**
 * Created by Administrator on 2017/2/10.
 */

import React, {Component} from "react";
import {AppRegistry} from "react-native";

//import HelloWorld from "./00_helloworld_demo/HelloWorld";
import movies from "./01_movies_demo/movies_demo";
import flexDemo from "./05_flex_demo/FlexDemo";


//AppRegistry.registerComponent('rnDemo', () => HelloWorld);
//AppRegistry.registerComponent('rnDemo', () => movies);
AppRegistry.registerComponent('rnDemo', () => flexDemo);