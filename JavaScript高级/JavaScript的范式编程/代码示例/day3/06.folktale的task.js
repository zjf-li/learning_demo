const {task} = require('folktale/concurrency/task')
const fs = require('fs')
const {split, find} = require('lodash/fp')

function readFile(fileName) {
    return task(resolver => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) 
                resolver.reject(err)
            
            resolver.resolve(data)
        })
    })

}

readFile('../package-lock.json')
.map(split('\n'))
.map(find(x=>x.includes('version')))
.run().listen({
    onRejected(err) {
        console.log('错误', err);
    },
    onResolved(value) {
        console.log('ok', value);
    }
})
