import React from 'react';
import './App.css';
// redux part 5
import {connect} from 'react-redux';
import {set_state} from './reduxStore/action';


var argument;
class App extends React.Component{
  render(){
    // {console.log("redux=>",this.props)}
    {console.log("redux Data==>",this.props)}
    return(
      <div>
        <p>hello jani</p>
        <p>sham ko akar bat karengy ok</p>
        <input type="text" placeholder="Update APP name" onChange={(e)=>{argument=e.target.value}}/>
        <button onClick={()=>this.props.set_state(argument)}>hello</button>
    
      </div>
      )
  }
}
// redux part 5
const mapStateToProps=(state)=>({
  username:state.auth.username,
  appname:state.app.appname
})

// update state
const mapDispatchToProps=(dispatch)=>({
  set_state:(data)=>dispatch(set_state(data))
  // (data)=>console.log(data)
  })
export default connect(mapStateToProps,mapDispatchToProps)(App);
