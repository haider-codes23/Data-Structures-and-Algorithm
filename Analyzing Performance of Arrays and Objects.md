# Analyzing Performance of Arrays and Objects(Built in Data- Structures)

1. How do things like Arrays and Objects, built-in methods and loop how do they perform ?
2. What are the easy things, the fast things we can do to array ?
3. What’s the method that might be slower than you would expect ?

### Objectives

1. Understand how objects and arrays work through the lens of Big O e.g. is there a fast way to insert into an array or is there a slow way to insert into an array
2. Explain why adding elements to the beginning of an array is costly
3. Compare and contrast the runtime for arrays and objects, as well as built-in-methods.

## The Big O for Objects

### Time Complexity

- What the Time Complexity for Insertion, removal, Searching and Accessing items in an Object ?
    - Objects Work well when you don’t need order
    - When you need fast access / insertion and removal
        - Time complexity for Insertion - O(1)
        - Time complexity for Removal - O(1)
        - Time Complexity for Searching - O(N) -IT’s checking if a given piece of infromation is in a value somewhere, we will have to potentially check every single item.
        - Time complexity for Access - O(1)

```jsx
let instructor = {
	firstName: "Haider",
	isInstructor: true,
	favoriteNumbers: [1, 2, 3]
}
```

### Built in Objects Methods Time complexity

- What is the Time complexity of Built in Object methods like Object.keys, Objects.values, Object.entries and hasOwnproperty ?
    - Time complexity for Object.keys, Object.values and Object.entries is Big O(N) but hasOwnProperty() methods has time complexiy of Big O(1). The reason why time complexity of key(), values() and entries() is Big O(N) is because JS will have to visit every single property in the object and add it into an array e.g. if there are a 100 properties in an Object we will need to do a 100 operations and as the number of properties grow the number of operations grow and runtime increases. And the reason why hasOwnProperty() has contant runtime is becasue we are providing it the name of the key and it accesses the property by it’s name and if it exist it return a boolean value indicating wether it exist or not.
    

## Time Complexity of Array

### Performance of Arrays and how do they compare to Objects

- Arrays are Ordered, but that can come at a cost for some of the operations e.g. like insertion and removal things can get complicated.
- Whats the Time complexity of Insertion, removal, searching and accessing elements in an array?
    - Accessing data in an array is very quick, it takes O(1) e.g. it takes constant time becasue we provide it an index number and it retrieves the element at that particular index, it only needs to access one index thus its 1 operation.
    - Insertion depends on where you are inserting, if your adding to the end of the array its contant runtime O(1) becasue that element will be aloted a new index. The probems comes when we are trying to insert at the beginning of the array, and the problem has to do with the indices e.g. in the array `names` below each item has an index starting from `0` and incrementing by 1 with each subsequent element, now if we tried adding an element at the beginning we will have we will have to reindex every single element in the array, so adding an element at the beginning of the array has `O(N)` time complexity because we have to do something once for every single element in the array. And the same goes for removing an element from the begining of the array we will have to reindex again so that also has a time complexity of `O(N)` . So adding and removing from the beginning of the array is not effiecient. So the built in array methods push() and pop() are faster than shift() and unShift().
    - Searching has time complexity of `O(N)` because e.g. if we have 10000 elements in our array and we want to check if some element exists we’ll have to potentially check 10000 elements, so as the number of items grow in the array so does the time.
        
        ```jsx
        let names = ["Haider", "Ibraheem", "Yusuf"];
        let values = [true, {}, [], 2, "Musa Jani"];
        ```
        
    

### Time complexity for Array Built-in methods

- Whats the Time complexity for push() ?
    - It’s O(1), because we just have to add an element to the end of the array, that one operation.
- Whats the Time complexity for pop() ?
    - It’s O(1), because we just have to remove the last element in the array which is just one operation.
- Whats the Time complexity for shift() ?
    - It’s O(N), because when we add an element at the beginning of the array, all the elements are reindexed, and as the number of elements in the array increase the number of operations increase thus the runtime also increases lineraly.
- Whats the Time complexity for unshift() ?
    - It’s O(N), becuase when we remove an element from the beignning of the array, all the elements are reindexed. And as the number of the elements in the array increase the number of operations increase thus the runtime also increses lineraly.
- What’s the Time complexity for concat() ?
    - concat() method creates a new array and populates it with the elements of the array passed to it as an argument, so as the elements in the array passed to it as argument increase the number of operations increase as well, so concat() method has a time complexity of O(N).
- What’s the Time complexity for slice() ?
    - slice() extracts elements from the calling array adds them into a new array and returns that, so if the elements from the calling array increase the number of operations will increase as well thus the time complexity also increases and the runtime also increase lineraly. So it has a complexity of O(N).
- What’s the Time complexity for splice() ?
    - splice() methods is used to change the content of an array e.g. removing/ replacing existing elements and/ or adding new elements. Now the elements being removed could be from from the beginning or the middle of the array or the end if its from the beginning or middle then Js will reindex all the elements thus we’d say that the number operations depend on the number of elements being removed and/ or added so the time complexity would be O(N).
- What’s the Time complexity for sort() ?
    - O(N * log(N))
- What’s the Time complexity of forEach(), map(), filter(), reduce() ?
    - forEach() method doesn’t return a new array but it iterates over the elements of the array and as the numbers of the element increase the runtime also increase thus it has a time comlexity of O(N).
    - map() method returns a new array whoes elements depend on the original content of the array. And the new array contain the same number of elements as the calling array contains so as the number of elements in the calling array increase the number of operations(adding elements in to the new array) also increase thus the runtime increses as well, so we can say that it has a time complexity of O(N).