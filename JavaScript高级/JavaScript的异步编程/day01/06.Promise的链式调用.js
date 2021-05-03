ajax('https://huawei-8gpj6slmd7c31407-1259036613.ap-shanghai.app.tcloudbase.com/')
// promise
.then(function (value) {
    console.log(1);
    return ajax('https://huawei-8gpj6slmd7c31407-1259036613.ap-shanghai.app.tcloudbase.com/')
})
// promise
.then(function (value) {
    console.log(22);
    console.log(value);
    return value
})
// promise
.then(function (value) {
    console.log(333);

})
