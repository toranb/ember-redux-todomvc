import Ember from 'ember';
import { connect } from 'ember-redux';
import { getFilter, getTodosCount, getCompletedCount } from '../reducers/todos';
import { clearCompleted, showAll, showActive, showCompleted } from '../actions/todos';

const stateToComputed = state => ({
  filter: getFilter(state),
  todosCount: getTodosCount(state),
  completedCount: getCompletedCount(state)
});

const dispatchToActions = {
  clearCompleted,
  showAll,
  showActive,
  showCompleted
};

const FooterComponent = Ember.Component.extend({
  tagName: 'footer',
  classNames: 'footer'
});

export default connect(stateToComputed, dispatchToActions)(FooterComponent);
