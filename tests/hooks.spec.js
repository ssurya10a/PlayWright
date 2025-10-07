import { test } from "allure-playwright";

test.describe('all test', ()=>{

    test.beforeAll(async()=>{
        console.log("beforeAll");
    })

    test.beforeEach(async()=>{
        console.log("beforeeach");
    })

    test.afterEach(async()=>{
        console.log("aftereach");
    })

    test.afterAll(async()=>{
        console.log("afterAll");
    })

    test('test1', async()=>{
        console.log("test1");
    });

    test('test2', async()=>{
        console.log("test2");
    });

    test('test3', async()=>{
        console.log("test3");
    });

    test('test4', async()=>{
        console.log("test4");
    });
})