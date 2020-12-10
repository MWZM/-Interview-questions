for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000)
    console.log(i);
}
//输出结果是什么

for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000)
    console.log(i);
}
//输出结果是什么

for (const i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000)
    console.log(i);
}
//输出结果是什么