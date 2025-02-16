// math.js
function add(a, b) {
    return a + b;
}
sub=(a,b)=>{
    return a-b;
}

// module.exports = { add ,sub}; 

exports.add=(a,b)=> a+b;
exports.sub=(a,b)=> a-b;
