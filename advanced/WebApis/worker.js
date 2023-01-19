onmessage = function(message){
    alert('count')
    console.log(message); // message.data
    let sum =0;
    for(let i=1; i<100000; i++){
        for(let j=0; j<299999; j++){
            sum = i+j;
        }
    }
    // send the message back to main thread using postMessage()
    postMessage(sum);
}
