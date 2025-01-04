class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index]
        if (!bucket) {
            this.table[index] = [key, 1]
        } else {
            bucket[1]++
        }
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index]
        if (bucket) {
            return bucket[1]
        }
        return undefined
    }


    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index]
        // console.log('asdf',bucket)
        // console.log('asdf',index)
        if (bucket) {
            this.table[index]=null
        }
    }

    dispaly() {
        for (let i = 0; i < this.size; i++) {
            // if (this.table[i]) {
                console.log(i, this.table[i])
            // }
        }
    }

}

const table = new HashTable(50);

const str = 'aabbbbcd'
for (let i = 0; i < str.length; i++) {
    table.set(str[i], 1)
}
// table.set('k',2)
// table.set('k',2)
console.log(table.get('b'))
table.remove('a')
table.set('a',2)
table.dispaly()