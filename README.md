# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` function: forgetting to unsubscribe from the listener when the component is unmounted. This can lead to memory leaks and unexpected behavior in your application.

## Bug Description
The provided `bug.js` file shows an implementation where the `unsubscribe` function is declared but the `useEffect` hook which should handle unsubscription is missing. This results in the listener remaining active even after the component is unmounted, consuming resources and potentially causing problems if the authentication state changes unexpectedly.

## Solution
The `bugSolution.js` file provides a corrected implementation.  The `useEffect` hook now correctly handles unsubscription, ensuring the listener is removed when the component is unmounted.  The cleanup function inside `useEffect` guarantees that `unsubscribe()` is called even if the component unmounts before `onAuthStateChanged` fires.

## How to Reproduce
1. Clone this repository.
2. Run `npm install firebase` to install Firebase.
3. Replace placeholders with your Firebase configuration.
4. Run the application. Note that the initial behavior will be incorrect, and the console will show that the listener persists. 
5. After fixing the code as shown in `bugSolution.js`, you'll notice the correct cleanup behavior.  

## Lessons Learned
Always remember to unsubscribe from Firebase listeners when they are no longer needed.  Failing to do so can lead to memory leaks, performance issues, and unexpected behavior.  Use `useEffect`'s cleanup function to guarantee proper cleanup. 