function quickSort(list, left, right) {
    left = left || 0;
    right = right || list.length - 1;

    if(list.length > 1){
        let index = quick(list, left, right);
        if(left < index - 1)
            quickSort(list, left, index - 1);

        if(right > index)
            quickSort(list, index, right);
    }

    return list;
}

function swap(list, left, right) {
    let aux = list[left];
    list[left]  = list[right];
    list[right] = aux;
}

function quick(list, left, right) {
    let key = parseInt( (left + right) / 2 );
    let pivot = list[key];

    let i = left;
    let j = right;

    while(i <= j) {
        while(list[i] < pivot)
            i++;
        while(list[j] > pivot)
            j--;

        if(i <= j){
            swap(list, i, j);
            i++;
            j--;
        }
    }
    return i;
}
let list;

list = [1, 5, 3, 4, 2];
quickSort(list);
console.log(list);

list = [1, 2, 3, 4, 5];
quickSort(list);
console.log(list);

list = [1, 5, 3, 4, 2, 9, 8];
quickSort(list);
console.log(list);

list = [1, 5, 3, 10, 4, 2];
quickSort(list);
console.log(list);