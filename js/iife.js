// IIFEs are a powerful technique in JavaScript that provide a way to execute code immediately and create isolated scopes. They are often used to improve code organization, prevent naming conflicts, and enhance data privacy.

(function() {
    var x = 'I am local';
    console.log(x); // Outputs: I am local
})();

console.log(x); // ReferenceError: x is not defined


