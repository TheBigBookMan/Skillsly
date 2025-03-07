/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable("users", function(table) {
        table.string("name").notNullable();
        table.string("username").notNullable().unique();
        table.string("bio").nullable();
        table.string("profile_picture").nullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable("users", function(table) {
        table.dropColumn("name");
        table.dropColumn("username");
        table.dropColumn("bio");
        table.dropColumn("profile_picture");
    })
};
