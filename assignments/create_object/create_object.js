function CreateObject(arr) {
    // Write your code here
    const obj={};
    let i=0;
    while(i<(arr.length)){
        obj[arr[i]]=arr[i+1];
        i=i+2
    }
    return obj
}

module.exports = CreateObject;
