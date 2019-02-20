const ghpages = require('gh-pages');

ghpages.publish('public', {
  repo: 'https://' + process.env.GITHUB_TOKEN + '@github.com:knowit/stromstad.knowit.no.git',
  silent: true
}, () => {});