import { LinkedList } from "./linkedList.js"; 

function HashMap() {
    const loadFactor = 0.75;
    let capacity = 16;
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

    const doubleCapacity = () => {
        capacity *= 2;
        let tempArray = entriesArray();
        linkedListArray = [];
        itemCount = 0;
        for (let i = 0; i < capacity; i++) {
            linkedListArray[i] = LinkedList();
        }
        tempArray.forEach(list => {
            list.forEach(pair => {
                set(pair[0], pair[1]);
            });
        });
        tempArray = null;

    }

    const set = (key, value) => {
        const hashCode = hash(key);
        if (!linkedListArray[hashCode].contains(key)) {
            linkedListArray[hashCode].append(key, value);
            // console.log(hashCode);
            itemCount++;
        }
        else if (linkedListArray[hashCode].contains(key)) {
            linkedListArray[hashCode].replace(key, value);
        }
        
        // Check if we need to grow our buckets array
        if (length() > loadFactor * capacity) {
            // capacity *= 2;
            
            doubleCapacity();
        }

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
        itemCount = 0;
        return;
    }
    const keys = () => {
        let keyString = "";
        linkedListArray.forEach(bucket => {
            const bucketString = bucket.toStringKeys();
            if (bucketString) {
                keyString += bucketString;
                keyString  += ', ';
            }
        });
        return keyString;
    }
    const values = () => {
        let keyString = "";
        linkedListArray.forEach(bucket => {
            const bucketString = bucket.toStringValues();
            if (bucketString) {
                keyString += bucketString;
                keyString  += ', ';
            }
        });
        return keyString;
    }
    const entries = () => {
        let keyString = "";
        linkedListArray.forEach(bucket => {
            const bucketString = bucket.toStringEntries();
            if (bucketString) {
                keyString += bucketString;
                keyString  += ', ';
            }
        });
        return keyString;
    }

    const entriesArray = () => {
        let arrayEntries = [];
        linkedListArray.forEach(bucket => {
            const bucketValue = bucket.toArrayEntries();
            if (bucketValue) {
                arrayEntries.push(bucketValue);
            }
        });
        return arrayEntries;
    }

    return {set, get, has, remove, length, clear, keys, values, entries, entriesArray};
}

// const test = HashMap();

// test.set('apple', 'red')
// test.set('banana', 'yellow')
// test.set('carrot', 'orange')
// test.set('dog', 'brown')
// test.set('elephant', 'gray')
// test.set('frog', 'green')
// test.set('grape', 'purple')
// test.set('hat', 'black')
// test.set('ice cream', 'white')
// test.set('jacket', 'blue')
// test.set('kite', 'pink')
// test.set('lion', 'golden')

// console.log(`Length: ${test.length()}`);

// test.set('jacket', 'green')
// test.set('kite', 'brown')
// test.set('lion', 'white')

// console.log(`Length: ${test.length()}`);

// test.set('moon', 'silver')

// console.log(`Length: ${test.length()}`);

// test.set('jacket', 'blue')
// test.set('kite', 'blue')
// test.set('lion', 'blue')

// console.log(test.entries());

// test.clear();
// console.log(`Length: ${test.length()}`);
