# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.ts`](src/dpk.ts) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
1. I've used typescript to have better control over types and as from my perspective it is better to use typescript.
   By specifying the types of the function's input and output, we can catch potential errors at compile time instead of at runtime. This helps improve the code's overall reliability and maintainability.
2. I've added an interface `Event` to specify the structure of the event object. The interface includes an optional `partitionKey` property and an index signature to allow for additional properties.
3. I've also specified the function's return type as a string.
4. In case there is no event object or the event object is empty, I return 0.
5. I used chaining methods for crypto.createHash().update().digest() instead of chaining multiple statements with a single method call each. This reduces the number of lines of code and makes the code more concise.
6. Also used nullish coalescing (??) operators to simplify the if statements and avoid multiple nested conditions. This makes the code more concise and easier to read.