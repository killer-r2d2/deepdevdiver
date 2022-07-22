module.exports = {
  apps: [
    {
      name: "backend",
      cwd: "/var/www/deepdevdiver/backend",
      script: "npm",
      args: "start",
    },
    {
      name: "frontend",
      cwd: "/var/www/deepdevdiver/frontend",
      script: "npm",
      args: "start",
    },
  ],
};
