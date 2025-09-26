module.exports = {
  apps : [{
    script: 'dist/src/app.js',
    out_file: '/home/ec2-user/.pm2/logs/app-out.log',
    error_file: '/home/ec2-user/.pm2/logs/app-error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
  }],
}
