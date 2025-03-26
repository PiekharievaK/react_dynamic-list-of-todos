import React from 'react';
// import { TodoItem } from '../TodoItem/TodoItem';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
  selectedId: number | null;
  setSelectedId: (id: number) => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  selectedId,
  setSelectedId,
}) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map(item => (
        <tr data-cy="todo" className="has-background-info-light" key={item.id}>
          <td className="is-vcentered">{item.id}</td>
          <td className="is-vcentered">
            {item.completed && (
              <span className="icon" data-cy="iconCompleted">
                <i className="fas fa-check" />
              </span>
            )}
          </td>
          <td className="is-vcentered is-expanded">
            <p
              className={
                item.completed ? 'has-text-success' : 'has-text-danger'
              }
            >
              {item.title}
            </p>
          </td>
          <td className="has-text-right is-vcentered">
            <button
              data-cy="selectButton"
              className="button"
              type="button"
              onClick={() => setSelectedId(item.id)}
            >
              <span className="icon">
                <i
                  className={
                    selectedId === item.id ? 'far fa-eye-slash' : 'far fa-eye'
                  }
                />
              </span>
            </button>
          </td>
        </tr>
        // <TodoItem
        //   todo={item}
        //   key={item.id}
        //   selectedId={selectedId}
        //   setSelectedId={setSelectedId}
        // />
      ))}
    </tbody>
  </table>
);
