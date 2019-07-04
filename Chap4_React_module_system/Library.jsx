import React, { Component } from 'react';

const myLibrary = 'My Library'
export const library = myLibrary;       
export const module = 'My module'       // import { library, module } from 'Library'

class Library extends Component {
    // your code
}

export default Library;                 // import Library from 'Library'
// 'bable' translates 'import, export' into 'require, module.export'.