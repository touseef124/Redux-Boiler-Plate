import store from ".."

const INITIAL_STATE={
    username:"touseefansari"
}

export default (state=INITIAL_STATE,action)=>{
    console.log("auth-action==>",action)
    return state;
}