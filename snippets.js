const snippets = {
    python: {
        1: [
            `print("Hello, World!")`,
            `name = "Python"`,
            `x = 10`,
            `y = 20`,
            `z = x + y`
        ],
        2: [
            `for i in range(5):\n    print(i)`,
            `if x > y:\n    print("x is greater")`,
            `def my_function():\n    print("Hello from a function")`,
            `my_list = [1, 2, 3, 4, 5]`,
            `import math`
        ],
        3: [
            `class MyClass:\n    x = 5`,
            `try:\n    print(x)\nexcept:\n    print("An exception occurred")`,
            `with open("myfile.txt", "w") as f:\n    f.write("Hello World")`,
            `x = lambda a : a + 10`,
            `import json`
        ],
        4: [
            `my_dict = {\n    "name": "John",\n    "age": 30\n}`,
            `def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)`,
            `import requests`,
            `from datetime import datetime`,
            `import os`
        ],
        5: [
            `import numpy as np`,
            `import pandas as pd`,
            `from flask import Flask`,
            `import tensorflow as tf`,
            `import matplotlib.pyplot as plt`
        ]
    },
    javascript: {
        1: [
            `console.log("Hello, World!");`,
            `let name = "JavaScript";`,
            `const x = 10;`,
            `let y = 20;`,
            `let z = x + y;`
        ],
        2: [
            `for (let i = 0; i < 5; i++) {\n    console.log(i);\n}`,
            `if (x > y) {\n    console.log("x is greater");\n}`,
            `function myFunction() {\n    console.log("Hello from a function");\n}`,
            `let myList = [1, 2, 3, 4, 5];`,
            `import { myModule } from './myModule.js';`
        ],
        3: [
            `class MyClass {\n    constructor() {\n        this.x = 5;\n    }\n}`,
            `try {\n    console.log(x);\n} catch (e) {\n    console.log("An exception occurred");\n}`,
            `fetch('https://api.example.com/data')\n    .then(response => response.json())\n    .then(data => console.log(data));`,
            `const myFunction = () => {\n    console.log("Hello from an arrow function");\n}`,
            `const myPromise = new Promise((resolve, reject) => {\n    setTimeout(() => {\n        resolve("Success!");\n    }, 1000);\n});`
        ],
        4: [
            `const myObject = {\n    name: "John",\n    age: 30\n};`,
            `const factorial = (n) => {\n    if (n === 0) {\n        return 1;\n    } else {\n        return n * factorial(n - 1);\n    }\n};`,
            `import React from 'react';`,
            `import { useState } from 'react';`,
            `import { useEffect } from 'react';`
        ],
        5: [
            `import { createStore } from 'redux';`,
            `import { Provider } from 'react-redux';`,
            `import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';`,
            `import styled from 'styled-components';`,
            `import axios from 'axios';`
        ]
    },
    html: {
        1: [
            `<h1>Hello, World!</h1>`,
            `<p>This is a paragraph.</p>`,
            `<a href="#">This is a link.</a>`,
            `<img src="image.jpg" alt="An image">`,
            `<ul>\n    <li>Item 1</li>\n    <li>Item 2</li>\n</ul>`
        ],
        2: [
            `<header>\n    <h1>My Website</h1>\n</header>`,
            `<footer>\n    <p>&copy; 2025 My Website</p>\n</footer>`,
            `<nav>\n    <ul>\n        <li><a href="#">Home</a></li>\n        <li><a href="#">About</a></li>\n        <li><a href="#">Contact</a></li>\n    </ul>\n</nav>`,
            `<form>\n    <label for="name">Name:</label>\n    <input type="text" id="name" name="name">\n</form>`,
            `<table>\n    <tr>\n        <th>Name</th>\n        <th>Age</th>\n    </tr>\n    <tr>\n        <td>John</td>\n        <td>30</td>\n    </tr>\n</table>`
        ],
        3: [
            `<video src="video.mp4" controls></video>`,
            `<audio src="audio.mp3" controls></audio>`,
            `<canvas id="myCanvas"></canvas>`,
            `<svg width="100" height="100">\n    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />\n</svg>`,
            `<iframe src="https://www.example.com"></iframe>`
        ],
        4: [
            `<meta charset="UTF-8">`,
            `<meta name="viewport" content="width=device-width, initial-scale=1.0">`,
            `<link rel="stylesheet" href="style.css">`,
            `<script src="script.js"></script>`,
            `<link rel="icon" href="favicon.ico">`
        ],
        5: [
            `<!DOCTYPE html>`,
            `<html lang="en">`,
            `<head>`,
            `<body>`,
            `</html>`
        ]
    },
    css: {
        1: [
            `body {\n    font-family: sans-serif;\n}`,
            `h1 {\n    color: blue;\n}`,
            `p {\n    font-size: 16px;\n}`,
            `.my-class {\n    background-color: yellow;\n}`,
            `#my-id {\n    border: 1px solid black;\n}`
        ],
        2: [
            `* {\n    margin: 0;\n    padding: 0;\n}`,
            `a:hover {\n    color: red;\n}`,
            `input[type="text"] {\n    border: 1px solid #ccc;\n}`,
            `@media (max-width: 600px) {\n    body {\n        background-color: lightblue;\n    }\n}`,
            `ul li {\n    list-style-type: none;\n}`
        ],
        3: [
            `display: flex;`,
            `justify-content: center;`,
            `align-items: center;`,
            `flex-direction: column;`,
            `position: relative;`
        ],
        4: [
            `position: absolute;`,
            `top: 0;`,
            `left: 0;`,
            `transform: translate(-50%, -50%);`,
            `transition: all 0.3s ease;`
        ],
        5: [
            `@keyframes my-animation {\n    from {\n        background-color: red;\n    }\n    to {\n        background-color: yellow;\n    }\n}`,
            `animation: my-animation 5s infinite;`,
            `--my-variable: #ff0000;`,
            `color: var(--my-variable);`,
            `filter: grayscale(100%);`
        ]
    }
};