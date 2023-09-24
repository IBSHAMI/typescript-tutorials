import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const charactersCollection = new CharactersCollection("anhhccdd")
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(sorter.collection)


const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(1000);
linkedList.sort();
linkedList.print();



