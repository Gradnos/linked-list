class Node{
    constructor(value){
        this.value = value || null;
        this.nextNode = null;
    }
}


class LinkedList{

    constructor(){
        this.firstNode = null;
    }

    append(value){
        if(!this.firstNode) this.firstNode = new Node(value);
        else{
            let current = this.firstNode
            while(current.nextNode !== null) current = current.nextNode;
            current.nextNode = new Node(value);
        }

    }

    prepend(value){
        if(!this.firstNode) this.firstNode = new Node(value);
        else{
            let current = new Node(value)
            current.nextNode = this.firstNode;
            this.firstNode = current;
        }
    }
    
    size(){
        let current = this.firstNode;
        if (!current) return 0;
        let counter = 1;
        while(current.nextNode !== null){
            current = current.nextNode;
            counter++;
        }
        return counter;
    }

    head(){
        return this.firstNode;
    }

    tail(){
        if(!this.firstNode) return null;
        let current = this.firstNode
        while(current.nextNode !== null) current = current.nextNode;
        return current;
    }

    at(index){
        if(!this.firstNode) return null;
        let current = this.firstNode
        let i;
        for(i=0; i<index; i++){
            if(current.nextNode === null) break;
            current = current.nextNode;
        }
        if(i === index) return current;
        else return null;
    }

    pop(){
        let size = this.size(this);
        let value;
        if(size === 0) return null;
        if(size === 1){
            value = this.firstNode.value;
            this.firstNode = null;
        } else{
            let beforeLast = this.at(size-2);
            value = beforeLast.nextNode.value;
            beforeLast.nextNode = null;
        }
        return value;
    }

    contains(value){
        if(!this.firstNode) return false;
        let current = this.firstNode
        while(current.nextNode !== null){
            if(current.value === value) return true;
            current = current.nextNode;
        }
        return current.value === value;
    }

    find(value){
        if(!this.firstNode) return null;
        let current = this.firstNode
        let id = 0;
        while(current.nextNode !== null){
            if(current.value === value) return id;
            current = current.nextNode;
            id++;
        }
        if(current.value === value) return id;
        else return null;
    }

    toString(){
        let string = "";
        if(!this.firstNode) return "";
        let current = this.firstNode
        string = "( " + current.value + " )";
        while(current.nextNode !== null){
            current = current.nextNode;
            string += " -> ( " + current.value + " )"
        }
        return string;
    }

}   

let list = new LinkedList();
console.log(list.at(0), "list.at(0)");
console.log(list.at(1), "list.at(1)");
console.log(list.contains(5), "list.contains(5)");
console.log(list.find(5), "list.find(5)");
console.log(list.contains(4), "list.contains(4)");
console.log(list.find(4), "list.find(4)");
console.log(list.head(), "list.head()");
console.log(list.size(), "list.size()");
console.log(list.tail(), "list.tail()");
console.log(list.pop(), "list.pop()");
console.log(list.toString(), "list.toString()");
console.log("----------------------");
list.append(5);

console.log(list.at(0), "list.at(0)");
console.log(list.at(1), "list.at(1)");
console.log(list.contains(5), "list.contains(5)");
console.log(list.find(5), "list.find(5)");
console.log(list.contains(4), "list.contains(4)");
console.log(list.find(4), "list.find(4)");
console.log(list.head(), "list.head()");
console.log(list.size(), "list.size()");
console.log(list.tail(), "list.tail()");
console.log(list.toString(), "list.toString()");
console.log(list.pop(), "list.pop()");
console.log(list.toString(), "list.toString()");
console.log("----------------------");

list.append(5);
list.prepend(3);

console.log(list.at(0), "list.at(0)");
console.log(list.at(1), "list.at(1)");
console.log(list.contains(5), "list.contains(5)");
console.log(list.find(5), "list.find(5)");
console.log(list.contains(4), "list.contains(4)");
console.log(list.find(4), "list.find(4)");
console.log(list.head(), "list.head()");
console.log(list.size(), "list.size()");
console.log(list.tail(), "list.tail()");
console.log(list.toString(), "list.toString()");
console.log(list.pop(), "list.pop()");
console.log(list.toString(), "list.toString()");
console.log("----------------------");

list.append(4);
list.prepend(3);
list.append(5);
list.prepend(2);

console.log(list.at(0), "list.at(0)");
console.log(list.at(1), "list.at(1)");
console.log(list.contains(5), "list.contains(5)");
console.log(list.find(5), "list.find(5)");
console.log(list.contains(4), "list.contains(4)");
console.log(list.find(4), "list.find(4)");
console.log(list.head(), "list.head()");
console.log(list.size(), "list.size()");
console.log(list.tail(), "list.tail()");
console.log(list.toString(), "list.toString()");
console.log(list.pop(), "list.pop()");
console.log(list.toString(), "list.toString()");
console.log("----------------------");
