//Mondog DB URL's are to be moved to env files

var conf = {
  dev: {
    server_port: 4000,
    mongodb_url: "",
  },

  prod: {
    server_port: 80,
    mongodb_url: "",
  },
};

module.exports = conf;
