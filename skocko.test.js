const { expect } = require("@jest/globals")
const { checkCombination } = require("./skocko")

const signs = ['❤️','♣️','♦️','♠️','⭐','😂']

test("Correct combination",()=>{
    expect(checkCombination(['❤️','♣️','♦️','♠️'],['❤️','♣️','♦️','♠️'])).toStrictEqual({red:4, yellow:0})
})

test("All missing",()=>{
    expect(checkCombination(['❤️','♣️','♦️','♠️'],['⭐','⭐','⭐','⭐'])).toStrictEqual({red:0, yellow:0})
})

test("Test 1.",()=>{
    expect(checkCombination(['❤️','❤️','♦️','♠️'],['❤️','❤️','⭐','♦️'])).toStrictEqual({red:2, yellow:1})
})

test("Test 2.",()=>{
    expect(checkCombination(['♣️','♣️','♦️','♠️'],['⭐','♣️','⭐','⭐'])).toStrictEqual({red:1, yellow:0})
})

test("Test 3.",()=>{
    expect(checkCombination(['♦️','♠️','⭐','😂'],['♠️','⭐','⭐','♠️'])).toStrictEqual({red:1, yellow:1})
})

test("Test 4.",()=>{
    expect(checkCombination(['❤️','♣️','♦️','♠️'],['❤️','♣️','❤️','♣️',])).toStrictEqual({red:2, yellow:0})
})

test("Test 5.",()=>{
    expect(checkCombination(['❤️','♣️','♦️','♠️'],['❤️','♣️','❤️','♦️'])).toStrictEqual({red:2, yellow:1})
})

test("Test 6.",()=>{
    expect(checkCombination(['❤️','♣️','♦️','♠️'],['❤️','♣️','❤️','♦️'])).toStrictEqual({red:2, yellow:1})
})

test("Test 7.",()=>{
    expect(checkCombination(['❤️','♣️','♦️','♠️'],['❤️','♣️','♦️','♦️'])).toStrictEqual({red:3, yellow:0})
})

test("Test 8.",()=>{
    expect(checkCombination(['❤️','😂','♦️','♠️'],['❤️','♣️','♦️','♦️'])).toStrictEqual({red:2, yellow:0})
})

test("Test 9.",()=>{
    expect(checkCombination(['❤️','😂','♦️','♠️'],['❤️','♠️','😂','♦️'])).toStrictEqual({red:1, yellow:3})
})

test("Test 10.",()=>{
    expect(checkCombination(['❤️','😂','♦️','♠️'],['😂','❤️','♦️','♠️'])).toStrictEqual({red:2, yellow:2})
})