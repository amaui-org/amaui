const path = require('path');
const http = require('http');
const fg = require('fast-glob');

const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 4000;

const run = async () => {
  const app = express();

  app.set('view engine', 'html');
  app.set('json spaces', 2);
  app.set('subdomain offset', 1);

  app.use(cors({ origin: '*' }));

  const root = path.join(__dirname, '../../../');

  app.use(express.static(root));

  app.get('*', async (req, res) => {
    const paths =
      (await fg(path.resolve(root, 'packages/**/', 'build/umd/*.dev.js'), { onlyFiles: true }))
        .map(path_ => path.relative(root, path_));

    paths.unshift(
      'https://unpkg.com/babel-standalone@6/babel.min.js',

      'https://unpkg.com/react@18.1.0/umd/react.production.min.js',

      'https://unpkg.com/react-dom@18.1.0/umd/react-dom.production.min.js',

      'https://unpkg.com/vue@3',

      'https://unpkg.com/@amaui/utils@latest/umd/amaui-utils.prod.min.js'
    );

    let value = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  scripts
</head>
<body>
  a

  <div id='app'></div>
</body>
</html>
`;

    let scripts = ``;

    paths.forEach(item => scripts += `<script src='${item}'></script>\n`);

    value = value.replace('scripts', scripts);

    return res.send(value);
  });

  const server = http.createServer(app);

  server.listen(port, error => {
    if (error) throw error;

    console.log(`Website started 🌱 at port ${port}`);
  });
};

run();
