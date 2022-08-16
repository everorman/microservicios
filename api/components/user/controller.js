const TABLA = 'user';

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
      store = require('../../../store/dummy');
  }

  async function list() {
      return store.list(TABLA);
  }

  async function get(id) {
      return store.get(TABLA, id);
  }

  return {
      list,
      get
  };
}