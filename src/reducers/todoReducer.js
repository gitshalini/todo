const todoReducer = (state = {
    value: "",suggestion: ""
}, action) =>{
switch(action.type){
    case 'Get_text':
    state= {
        ...state,
       value: action.payload,
    }    
    break;
    case 'Get_suggestion' :
    state ={ 
        ...state,
        suggestion: action.payload,
    }
break;
    default: 
}
return state;
};
export default todoReducer;


