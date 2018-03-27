export const allTodos = ({ todos }) => {
   let todoId = Object.keys(todos);

   return todoId.map(id => {
       return todos[id];
   });
};