function mergeSort(list){
    if(list.length <= 2)
        return list;

    let middle = parseInt(list.length / 2);
    let left  = list.slice(0, middle);
    let right = list.slice(middle, list.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let res = [];

    while(left.length && right.length){
        if(left[0] <= right[0])
            res.push(left.shift());
        else
            res.push(right.shift());
    }

    while(left.length)
        res.push(left.shift());
    while(right.length)
        res.push(right.shift());

    return res;
}