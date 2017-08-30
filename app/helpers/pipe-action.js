import Ember from 'ember';
import { pipe } from './pipe';

const closurePipe = pipe;

export default Ember.Helper.helper(closurePipe);
