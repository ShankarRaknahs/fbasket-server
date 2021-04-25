//Mondog DB URL's are to be moved to env files

var conf = {
  dev: {
    server_port: 4000,
    mongodb_url:
      "mongodb+srv://admin:admin@cluster0.cnc1p.mongodb.net/fbasket?retryWrites=true&w=majority",
  },

  prod: {
    server_port: 80,
    mongodb_url:
      "mongodb+srv://admin:admin@cluster0.cnc1p.mongodb.net/fbasket?retryWrites=true&w=majority",
  },
};

module.exports = conf;
