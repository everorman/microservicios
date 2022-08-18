const TABLA = 'user';
const { nanoid } = require('nanoid');
const auth = require('../auth');

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

  async function upsert(body) {
    const { id, name, username, password } = body;
    const user = {
      name,
      username,
    }

    if (id) {
      user.id = id;
    } else {
      user.id = nanoid();
    }

    if (password || username) {
      await auth.upsert({ ...user })
    }

    return store.upsert(TABLA, user);
  }

  return {
    list,
    get,
    upsert
  };
}