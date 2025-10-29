function LinkedList() {
    let head = null;
    let tail = null;
    let count = 0;

    const append = (key, value) => {
        let newNode = Node(key, value);
        if (head == null) {
            head = newNode;
            tail = newNode;
        }
        else {
            tail.nextNode = newNode;
            tail = newNode;
        }
        count ++;
    }

    const at = (index) => {
        if (head == null) {
            return;
        }
        if (index >= count) {
            return null;
        }
        let tempNode = head;
        let counter = 0
        while (tempNode.nextNode != null && counter < index) { 
            tempNode = tempNode.nextNode;
            counter++
        }
        return tempNode;

    }
    const contains = (key) => {
        if (head == null) {return;}
        let tempNode = head;
    
        while (tempNode != null) {
            if (tempNode.key == key) {
                return true;
            }
            tempNode = tempNode.nextNode;
        }
        return false;
        
    }
    const replace = (key, target) => {
        if (head == null) {return false;}
        let tempNode = head;

        while (tempNode != null) {
            if (tempNode.key == key) {
                tempNode.value = target;
                return true;
            }
            tempNode = tempNode.nextNode;
        }
        return false;
    }

    // [] -> [] -> [k] -> []
    const remove = (key) => {
        if (head == null) {
            return false;
        }
        let tempNode = head;
        let prevNode = null;
        
        while (tempNode != null && tempNode.key != key) {
            prevNode = tempNode;
            tempNode = tempNode.nextNode;
        }
        if (tempNode == null) {
            return false;
        }

        // Remove head
        if (prevNode == null) {
            head = tempNode.nextNode;
            if (head == null) {
                tail = null;
            }
        }
        else {
            prevNode.nextNode = tempNode.nextNode;
            if (tempNode == tail) {
                tail = prevNode;
            }
        }

        return true;
    }

    const find = (key) => {
        if (head == null) {return null;}
        let tempNode = head;
       
        while (tempNode != null) {
            if (tempNode.key == key) {
                return tempNode.value;
            }
            tempNode = tempNode.nextNode;
        }
        return null;
    }
    
    const toString = () => {
        let tempNode = head;
        let string = "";
    
        while (tempNode != null) {
            string += `( ${tempNode.key} - ${tempNode.value} ) -> `;
            tempNode = tempNode.nextNode;
        }
    
        string += "null";
    
        return string;
    }

    // const getKeys = () => {
    //     let keyArray = 
    // }

    return {append, at, contains, find, toString, replace, remove}
}

function Node(key, value) {
    let nextNode = null;
    return {key, value, nextNode}
}

// let tempList = LinkedList();

// tempList.append("dog", "horse");
// tempList.append("horse", "cat");
// console.log(tempList.toString());
// tempList.replace("dog", "fly")
// console.log(tempList.toString());

export {LinkedList}