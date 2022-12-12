let {returnTwo, greeting, add} = require('./functions.js');



test('returnTwo should return 2', ()=>{
    expect(returnTwo()).toBe(2)
})

test(`greeting(James) return Hello, James`, ()=>{
    expect(greeting('James')).toBe('Hello, James')
})

test(`greeting(Adam) return Hello, Adam`, ()=>{
    expect(greeting('Adam')).toBe('Hello, Adam')
})
test('adds 1 and 2 equal 3', ()=>{
    expect(add(1, 2)).toEqual(3)
})