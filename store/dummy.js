const db = {
  'user': [
    { id: 1, name: 'Carlos' },
  ],
};

async function list(tabla) {
  return db[tabla];
}

async function get(tabla, id) {
  let col = await list(tabla);
  const salida = col.filter(item => item.id == id)[0] || null;
  return salida;
}

async function upsert(tabla, data) {
  if (!db[tabla]) {
    db[tabla] = [];
  }
  return db[tabla].push(data);
}

async function remove(tabla, id) {
  return true;
}

async function query(tabla, q) {
  let col = await list(tabla);
  let keys = Object.keys(q);
  let key = keys[0];

  return col.filter(item => item[key] === q[key])[0] || null;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
  query
};