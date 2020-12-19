import React from 'react';
const INITIAL_STATE={
    appname:"Chat APP"
}


export default (state=INITIAL_STATE,action)=>{
    console.log("app-action==>",action)
    switch (action.type) {
        case "set_data" :
            
            return ({
                ...state,    
                appname:action.item
            })   
    }
    return state;
}