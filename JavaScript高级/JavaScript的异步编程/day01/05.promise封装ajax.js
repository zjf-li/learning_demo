function ajax(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.onload = function () {
            if (this.status === 200) {
                resolve(this.response)
            }
            reject(this.statusText)
        }
        xhr.send()
    })
}

ajax('./data.json')
