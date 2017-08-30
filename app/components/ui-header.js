import Ember from 'ember';
import { connect } from 'ember-redux';
import { addTodo } from '../actions/todos';

const HeaderComponent = Ember.Component.extend({
  text: '',
  tagName: 'header',
  classNames: 'header'
});

const dispatchToActions = {
  addTodo
}

export default connect(null, dispatchToActions)(HeaderComponent);
