# Algorithm-Interview

## Data Structure
In the most basic terms, a data structure is a format for organizing data in an efficient way. 

In practical terms, we can split data structures into two things: the interface and the implementation.
<br>
<br>
<br>
The interface is like a contract that specifies how we can interact with the data structure - 

what operations we can perform on it, what inputs it expects, and what outputs we can expect.

For example, consider a dynamic array. 

The interface would include operations like appending, insertion, removal, updating, and more. 

These operations are well-defined and have specific rules that we must follow when we use them. 

If we want to append an element, we use the built-in method like .append() or .push() 

while passing in the element we want to add as an argument. 
<br>
<br>
<br>
The implementation is the code that actually makes the data structure work. 

This is where the details of how the data is stored and how the operations are performed come into play. 

For example, the implementation of a dynamic array might involve allocating memory for the list, 

tracking the size, and rearranging the elements when an operation like remove is called.
<br>
<br>
<br>
### 2. Hash maps and Sets
Hash maps and sets are implemented using hashing(hash function).

A hash function is a function that takes an input and deterministically converts it to an integer 

that is less than a fixed size set by the programmer. 

Inputs are called keys and the same input will always be converted to the same integer. 

Here's an example hash algorithm for a string containing letters of the English alphabet:

1. Declare an integer total.

2. Iterate over the string. For each character, convert it to its position in the alphabet. For example, a -> 1, c -> 3, z -> 26.

3. Take that value, and multiply it by the current position in the string (index + 1). Add this to total. For example, given the string "abc", the b is at position 2 in the alphabet and position 2 in the string, so it would contribute 2 * 2 = 4 towards total.

4. After going through every character, total % x is the converted value. % is the modulo operation, and makes sure the final converted value will be in the range [0, x - 1].
<br>

We know that arrays have O(1) random access. Given an arbitrary index, we can access and update its value in the array in constant time. 

The main constraint with arrays is that they are a fixed size, and the indices have to be integers. 

Because hash functions can convert any input into an integer, we can effectively remove the constraint of indices needing to be integers. 

When a hash function is combined with an array, it creates a hash map, also known as a hash table or dictionary.

With arrays, we map indices to values. With hash maps, we map keys to values, and a key can be almost anything. 

Typically, the only constraint on a hash map's key is that it has to be immutable(this is language dependent). Values can be anything.
<br>
<br>

The biggest disadvantage of hash maps is that for smaller input sizes, they can be slower due to overhead. 

Because big O ignores constants, the O(1) time complexity can sometimes be deceiving - 

it's usually something more like O(10) because every key needs to go through the hash function, and there can also be collisions.
<br>
<br>

Hash tables can also take up more space. 

Dynamic arrays are actually fixed-size arrays that resize themselves when they go beyond their capacity. 

Hash tables are also implemented using a fixed size array - remember that the size is a limit set by the programmer. 

The problem is, resizing a hash table is much more expensive 

because every existing key needs to be re-hashed, and also a hash table may use an array 

that is significantly larger than the number of elements stored, resulting in a huge waste of space. 

