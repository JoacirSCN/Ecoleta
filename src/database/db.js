// Import dependence from sqlite3
const sqlite3 = require("sqlite3").verbose();

// create the object that will do operations on the database
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;
// use the database object for our operation.
//db.serialize(() => {
  // Create table - sql commands
  /* db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      itens TEXT
    );
  `); */

  
  // Insert data into table - sql commands
  /* const query = `
    INSERT INTO places (
      image,
      name,
      address,
      address2,
      state,
      city,
      itens
    ) VALUES (?,?,?,?,?,?,?);
  `;

  const values = [
    'https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    'Papersider',
    'Guilherme Gemballa, Jardim Américo',
    'Número 260',
    'Santa Catarina',
    'Rio do Sul',
    'Resíduos Eletrônicos, Lâmpadas'
  ]

  function afterInsertData(err) {
    if(err) {
      return console.log(err)
    }

    console.log('Cadastrado com sucesso');
    console.log(this);
  }
  
  db.run(query, values, afterInsertData); */

  // query data in table - sql commands
  /* db.all(`SELECT * FROM places`, function(err, rows) {
    if(err) {
      return console.log(err)
    }
    
    console.log('Aqui estão seus registros:');
    console.log(rows)
  }); */
  
  // delete data in table - sql commands
 /*  db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
    if(err) {
      return console.log(err)
    }

    console.log('Registro deletado com sucesso!');
  }) */

//});
