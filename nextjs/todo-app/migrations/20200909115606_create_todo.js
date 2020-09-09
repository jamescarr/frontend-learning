
exports.up = function (knex) {
    return knex.schema.createTable("todos", function (table) {
        table.increments("id");
        table.string("description", 255).notNullable();
        table.boolean("done").defaultTo(false).notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("todos");
};
