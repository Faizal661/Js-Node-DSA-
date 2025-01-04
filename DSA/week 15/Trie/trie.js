
class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEnd = true;
    }

    search(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return current.isEnd;
    }

    startsWith(prefix) {
        let current = this.root;
        for (const char of prefix) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}

const trie = new Trie();

trie.insert("apple");
trie.insert("app");
trie.insert("banana");  

// console.log("Words inserted: 'apple', 'app', 'banana'");

// console.log("Search for 'apple':", trie.search("apple"));  // true
// console.log("Search for 'app':", trie.search("app"));      // true
// console.log("Search for 'appl':", trie.search("appl"));    // false

// console.log("Starts with 'app':", trie.startsWith("app"));  // true
// console.log("Starts with 'ban':", trie.startsWith("ban"));  // true
// console.log("Starts with 'bat':", trie.startsWith("bat"));  // false

console.log(trie)
