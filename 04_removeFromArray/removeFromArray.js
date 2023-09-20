const removeFromArray = function(array, ...elements) {
    const result = [];
    array.forEach((x) => {
        if (!elements.includes(x)) result.push(x);
    })
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
