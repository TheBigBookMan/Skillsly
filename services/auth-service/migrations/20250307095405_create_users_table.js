/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("users", function(table) {
        table.string("id"),primary();
        table.string("email").unique().notNullable();
        table.enum("role", ["user", "instructor"]).defaultTo("user");
        table.timestamp("created_at").defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("users");
};
