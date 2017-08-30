import Ember from 'ember';
import { connect } from 'ember-redux';
import { getTodos } from '../reducers/todos';

const TodoListComponent = Ember.Component.extend({
  tagName: 'ul',
  classNames: 'todo-list'
});

const stateToComputed = state => ({
  todos: getTodos(state)
});

export default connect(stateToComputed)(TodoListComponent);
