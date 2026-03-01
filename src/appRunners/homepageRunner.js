import {
	Data,
	LinkedList,
	Node,
} from "../Data/appData.js";

import { Homepage } from "../Ui/pages/homepage.js"


// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString())

console.log("( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null")
