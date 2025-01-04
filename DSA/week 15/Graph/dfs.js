function dfs(graph, startNode, visited = new Set()) {
    visited.add(startNode);
    console.log(startNode);

    for (const neighbor of graph[startNode]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited);
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

dfs(graph, 'A');