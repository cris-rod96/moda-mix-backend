import app from './src/app.js';
import { PORT } from './src/config/config.js';
import { conn } from './src/lib/conn.js';

conn
  .sync({ logging: false, force: false })
  .then(() => {
    console.log('Database connected');
    app.listen(PORT, () => {
      console.log(`Server listening in port ::${PORT}`);
    });
  })
  .catch(console.log);
