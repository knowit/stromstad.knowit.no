const ghpages = require('gh-pages');

ghpages.publish('publich', {
  repo: 'https://' + process.env.GITHUB_TOKEN + '@github.com:knowit/stromstad.knowit.no.git',
  silent: true
}, () => {});