
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tweets', tbl => {
      tbl.increments();
      tbl.string('username');
      tbl.string('comment');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tweets');
};
