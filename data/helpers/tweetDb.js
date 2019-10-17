const db = require('../dbConfig');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};

function find() {
    return db('tweets');
};

function findById(id) {
    return db('tweets')
      .where({ id })
      .first();
  }
  
  function add(tweet) {
    return db('tweets').insert(tweet, 'id');
  }
  
  function update(id, changes) {
    return db('tweets')
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db('tweets')
      .where({ id })
      .del();
  }