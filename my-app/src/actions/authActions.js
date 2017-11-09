import ActionTypes from "./types";

export function login() {
    return ((dispatch) => {
        dispatch(requestTodos());
        TodoService.getTodoList()
            .then((todos) => {
                dispatch(receiveTodos(todos));
            })
            .catch((error) => {
                dispatch(receiveErrorTodos(error));
            });
    });
}