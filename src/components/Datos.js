import React , { Component} from 'react';
import { connect } from 'react-redux';

import getSummoner from '../redux/actions/getSummoner';

class Datos extends Component{
 state = {
  		 text :"Martinez",
		input: "",
		

  };

constructor(props){
	super(props);

	
	this.sendSummoner = this.sendSummoner.bind(this);
	this.clickSummoner = this.clickSummoner.bind(this);
	
}

sendSummoner(e) {
  this.setState({input:e.target.value});
}

clickSummoner(e) {
  console.log(this.state.input);
  console.log(this.props.getSummoner(this.state.input));
 
}


render(){
	
	console.log(this.props);
	

	return(<div className="datosC">
		<input type="text" name="box" onChange={ this.sendSummoner}/>
		<button onClick={this.clickSummoner}>Click</button>
		<h3>Datos test : {this.props.summonerReducer}</h3>
		</div>)
}
}




const mapStateToProps = (state) => {
	return {
		summonerReducer: state.summonerReducer
	}
};

const mapDispatchToProps ={
	getSummoner,
};




export default connect(mapStateToProps,mapDispatchToProps)(Datos);