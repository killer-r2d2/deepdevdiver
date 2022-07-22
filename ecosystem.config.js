module.exports = {
  apps: [
    {
      name: "backend",
      cwd: "/var/www/base-web/backend",
      script: "npm",
      args: "start",
    },
    {
      name: "frontend",
      cwd: "/var/www/base-web/frontend",
      script: "npm",
      args: "start",
    },
  ],
};
