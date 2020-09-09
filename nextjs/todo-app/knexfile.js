module.exports = {
    development: {
        client: "postgresql",
        connection: "postgres://postgres:changeme@localhost:5432/todo",
        migrations: {
            tableName: "knex_migrations"
        }
    },
};
