
const parseMessagesErrors  = ((messages) => {

    let errObject='';
    let count = 0;
    for(let m in messages){
        if(count === messages.length-1 || count === 0){
            errObject+= messages[m];
        }else{
            errObject=errObject+", "+ messages[m];
        }
        count ++;
    }
    return errObject;
})

export{
    parseMessagesErrors
}
