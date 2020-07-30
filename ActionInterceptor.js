
const actionInterceptor = store => next => action => {
    let currentState = store.getState()
    let allowNextAction = true;
    // console.log(currentState)
    // console.log(action.type)
    if(action.type==='DELETE_TODO'){
      if(confirm('Are u sure?')){
        next(action)
      }else{
        console.log('Cancel')
      }
    }else{
      next(action)
    }
    
  }
  
  
  
  export default actionInterceptor