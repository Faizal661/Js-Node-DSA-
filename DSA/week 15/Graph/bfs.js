function bfs(graph, startNode) {
    const queue = [startNode];
    const visited = new Set();
    visited.add(startNode);

    while (queue.length > 0) {
        const currentNode = queue.shift();
        console.log(currentNode);

        for (const neighbor of graph[currentNode]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
}


const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F'],
    D: [],
    E: ['F'],
    F: []
};

bfs(graph, 'A');