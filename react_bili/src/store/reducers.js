const defaultState ={
    list:{}
}
export default((state=defaultState,action)=>{
    switch(action.type){
        case "loadData":
            return {
                list:action.data
            
            }
        default :
        return state;
        break;
    }
})