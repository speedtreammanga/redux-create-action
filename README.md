# Redux Create Action
[Packaged this bit of code](https://redux.js.org/recipes/reducing-boilerplate#generating-action-creators)

Usage:
```javascript
import { createAction } from 'redux-create-action';

export const addTodo = createAction('ADD_TODO', 'id', 'text');
// returns { type: "ADD_TODO", id, text }
```
```javascript
import { addTodo } from '...';

const mapDispatchToProps = dispatch => ({
  onAddTodo: (id, text) => dispatch(addTodo(id, text))
});
```
