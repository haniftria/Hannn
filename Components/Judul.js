import React from 'react';
import {Text} from 'react-native';

class judul extends React.Component{
      render(){
           return (
           	<Text style ={salon.judul}>{this.props.title}</Text>
           )
      }
}

const salon = {
judul: {
	color: "#7D1313",
	fontSize: 75,
	fontWeight: 'bold'
		}
	}

export default judul;