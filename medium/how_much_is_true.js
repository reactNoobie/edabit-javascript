function countTrue(arr) {
    return arr.reduce((result, current) => {
        return current ? result + 1 : result;
    }, 0);
}
