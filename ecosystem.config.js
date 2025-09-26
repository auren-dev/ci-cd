module.exports = {
  apps : [{
    name: 'ci-cd-app',
    script: 'dist/src/app.js',
    // out_file: '/home/ec2-user/.pm2/logs/ci-cd-app-out.log',
    // error_file: '/home/ec2-user/.pm2/logs/ci-cd-app-error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
  }],
};
