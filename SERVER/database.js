// Configuración de la conexión a PostgreSQL
const { Pool } = require('pg');
const pool = new Pool({
    user: 'database_render_zhhu_user',
    host: 'dpg-cqnurtdds78s73bov5d0-a.oregon-postgres.render.com',
    database: 'database_render_zhhu',
    password: 'LiEJPejOlmqDiZe48670Rtqgp5T96EcF',
    port: 5432
  });
  
  module.exports = pool;