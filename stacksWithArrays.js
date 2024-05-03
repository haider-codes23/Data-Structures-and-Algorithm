let stack = [];

// In orfer for array to act like a stack we need a way to add to it, so that the first item added can only be removed in the end 
stack.push("MY");
stack.push("Name");
stack.push("is");
stack.push("Musa Jani");


// Inorder for this to be a stack we need a way to remove from it where the most recently added thing what i get first when i remove something from it
// The built in method of array e.g. pop() can do that for us
console.log(stack.pop());
console.log(stack);
