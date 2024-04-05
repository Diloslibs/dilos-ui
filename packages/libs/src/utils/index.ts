/**
 * This is a debounce function that takes a function `func` and a delay `delay` as arguments.
 * It returns a new function that, when called, will execute `func` after `delay` milliseconds
 * has elapsed since the last time the returned function was called.
 * 
 * The debounce function uses a closure to keep track of the `timeoutId`, which is used to
 * manage the debounce behavior. The `timeoutId` is initially undefined.
 * 
 * @param func The function to be debounced.
 * @param delay The delay in milliseconds before `func` is executed.
 * @returns A debounced function.
 */
export const debounce = (func: Function, delay: number): (...args: any[]) => void => {
  let timeoutId: NodeJS.Timeout;

  // Return a new function that takes any number of arguments and returns void.
  return (...args: any[]) => {
    // Clear any existing timeout to prevent `func` from being called.
    clearTimeout(timeoutId);

    // Set a new timeout to call `func` after `delay` milliseconds.
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * This is a chunkArray function that takes an array `array` and an optional size `size` as arguments.
 * It returns an array of arrays, where each inner array contains `size` elements from the original `array`.
 * 
 * The chunkArray function uses a for loop to iterate over the `array` in chunks of `size` elements.
 * It uses the slice method to extract a chunk of `size` elements starting from index `i`, and then
 * pushes that chunk into the `chunks` array.
 * 
 * @param array The array to be chunked.
 * @param size The size of each chunk (default is 10).
 * @returns An array of arrays containing chunks of `array`.
 */
export const chunkArray = <T>(array: T[], size: number = 10): T[][] => {
  // Initialize an empty array to store the chunks.
  const chunks: T[][] = [];

  // Loop through the array in chunks of `size` elements.
  for (let i = 0; i < array.length; i += size) {
    // Slice the array to extract a chunk of `size` elements starting from index `i`.
    // Push the chunk into the `chunks` array.
    chunks.push(array.slice(i, i + size));
  }

  // Return the array of chunks.
  return chunks;
}
