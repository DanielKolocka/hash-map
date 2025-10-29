import { LinkedList } from "./linkedList.js"; 

function HashMap() {
    const loadFactor = 0.75;
    const capacity = 16;
    let itemCount = 0;

    let linkedListArray = [];
    for (let i = 0; i < capacity; i++) {
        linkedListArray[i] = LinkedList();
    }

    const hash = (key) => {
        let hashCode = 0;
        const primeMultiplier = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = ((hashCode * primeMultiplier) + key.charCodeAt(i) % capacity);
        }
        // console.log(`Hash Code for (${key}): ${hashCode % capacity}`);
        return hashCode % capacity;
    }

    const set = (key, value) => {
        const hashCode = hash(key);
        if (!linkedListArray[hashCode].contains(key)) {
            // Add
            linkedListArray[hashCode].append(key, value);
            itemCount++;
        }
        else if (linkedListArray[hashCode].contains(key)) {
            linkedListArray[hashCode].replace(key, value);
        }

        // If load factor is reached
            // Double the capacity

        return;
    }

    const get = (key) => {
        const hashCode = hash(key);
        return linkedListArray[hashCode].find(key);
    }
    const has = (key) => {
        const hashCode = hash(key);
        return linkedListArray[hashCode].contains(key);
    }
    const remove = (key) => {
        const hashCode = hash(key);
        if (linkedListArray[hashCode].remove(key)) {
            itemCount--;
            return true;
        }
        else {
            return false;
        }
    }
    const length = () => {
        return itemCount;
    }
    const clear = () => {
        linkedListArray.length = 0;
        return;
    }
    const keys = () => {}
    const values = () => {}
    const entries = () => {}

    return {set, get, has, remove, length, clear};
}

const test = HashMap();
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');

console.log(test.get('apple'));
console.log(test.get('banana'));
console.log(test.get('carrot'));

console.log(test.has('apple'));
console.log(test.has('banana'));
console.log(test.has('carrot'));

console.log(test.length());

test.remove('apple');

console.log(test.length());
console.log(test.get('apple'));

