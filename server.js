// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fastify = require('fastify')({ logger: true });

// eslint-disable-next-line @typescript-eslint/no-var-requires
fastify.register(require('fastify-cors'), {});

fastify.get('/', async (request, reply) => {
  fs.readFile('./users.json', 'utf8', (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('File read failed:', err);
      return;
    }

    if(request.query.term)
    {
      const result = JSON.parse(data).filter((elem)=> elem.name.toLowerCase().search(request.query.term.toLowerCase()) !== -1);
      reply.send(JSON.stringify(result));
    }
    else
    {
      reply.send(data);
    }

  });
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
