 let set_state=(data)=>{
    return (dispatch)=>{
        dispatch({type:"set_data",
                    item: data })

    }
    }
export {
    set_state
}