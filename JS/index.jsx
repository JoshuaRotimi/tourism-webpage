import React from 'react';

const addUser = (a,b) => {
    return 2* (a * b);
};

const result = addUser(2,2);
console.log(`The answer is ${result}`);

const dashboard = () => (
    <div>
        <h1>Today is a rainy day</h1>
        <p>{result}</p>
    </div>
);

export default dashboard;