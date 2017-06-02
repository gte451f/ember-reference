import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('main');

  this.route('owner', function () {
    this.route('add');
    this.route('edit', { path: '/:id/edit' });
    this.route('item', { path: '/:owner_id' });
  });

  this.route('account', function () {
    this.route('edit');
    this.route('item', { path: '/:account_id' });
    this.route('add');
  });

  this.route('test');
});

export default Router;
