const express = require('express');
const server = express();

// get database
const db = require('./database/db.js');

// Configure past public
server.use(express.static('public'));

// Enable the use of request.body in our application
server.use(express.urlencoded({extended: true}))

// Utils template engine nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true
});

// Configure routes from my application
// Local Page
server.get('/', (request, response) => {
  return response.render('index.html', { title: 'Um título'});
});

server.get('/create-point', (request, response) => {
  //request.query
  return response.render('create-point.html');
});

server.post('/savepoint', (request, response) => {
  // Insert data into table - sql commands
  const query = `
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
    request.body.image,
    request.body.name,
    request.body.address,
    request.body.address2,
    request.body.state,
    request.body.city,
    request.body.itens
  ]

  function afterInsertData(err) {
    if(err) {
      console.log(err)
      return response.send('Erro no cadastro!')
    } 

    return response.render('create-point.html', { saved: true })
  }
  
  db.run(query, values, afterInsertData); 

  
});

server.get('/search', (request, response) => {
  const search = request.query.search;

  if(search == '') {
    // search nulo
    return response.render('search-results.html', { total: 0});
  }



  // query data in table - sql commands
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
    if(err) {
      return console.log(err)
    }
    
    const total = rows.length

    return response.render('search-results.html', { places: rows, total});
  });
});

// Power Server
server.listen(3000);

