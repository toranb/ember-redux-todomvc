import Ember from 'ember';
import { connect } from 'ember-redux';
import { editTodo, deleteTodo, completeTodo } from '../actions/todos';

const { get, set, run: { scheduleOnce } } = Ember;

const TodoItemComponent = Ember.Component.extend({
  tagName: 'li',
  editing: false,
  classNameBindings: ['todo.completed', 'editing'],
  actions: {
    startEditing() {
      set(this, 'editing', true);
    },
    doneEditing() {
      set(this, 'editing', false);
    },
    focusInput() {
      scheduleOnce('afterRender', this, () => {
        this.element.querySelector('input.edit').focus();
      });
    },
    handleKeydown(e) {
      if (e.keyCode === 13) {
        e.target.blur();
      } else if (e.keyCode === 27) {
        set(this, 'editing', false);
      }
    }
  }
});

const dispatchToActions = {
  deleteTodo,
  completeTodo,
  editTodo
}

export default connect(null, dispatchToActions)(TodoItemComponent);
