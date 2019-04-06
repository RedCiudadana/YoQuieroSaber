import Route from '@ember/routing/route';
import config from '../../config/environment';

export default Route.extend({
  breadCrumb: null,

  model() {
    return this.modelFor('perfil');
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.setProperties(model);
    controller.setProperties({
      disqusShortname: config.disqus.shortname
    });
  }
});
