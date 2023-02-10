/* eslint-disable no-underscore-dangle, @typescript-eslint/no-unused-vars */
let dbm;
let type;
let seed;

exports.setup = (options, seedLink) => {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = (db) => db.runSql(`
  CREATE TABLE IF NOT EXISTS payment_options (
    id serial PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
  );
`);

exports.down = (db) => db.runSql(`
    DROP TABLE IF EXISTS payment_options;
`);

exports._meta = {
  version: 1,
};
