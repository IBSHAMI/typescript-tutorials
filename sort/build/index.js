"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
// const charactersCollection = new CharactersCollection("anhhccdd")
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(sorter.collection)
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(1000);
linkedList.sort();
linkedList.print();
