# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

   -It solves the problem of props drilling, allowing you to share props or state with an indirect child or parent.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   -STORE- represents the state of the entire application

   -ACTIONS - represents events that occur in the application, for example, actions can be user input or network responses. Actions combined with the current state are reduced into a new state.

   -REDUCERS - take in actions and the current state then produces a new state based on the actions passed in

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?\

   -It allows us to use create an action-creator thats returns a function instead of the action itself, to delay dispatching the action.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

   -Context API is my favorite because it its the easiest to use and in my opinion the most efficient for most use cases. Redux is very easy to miss information and have the app not functioning as it should.
