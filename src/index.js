const { App } = require('@slack/bolt');
const slackConfiguration = require('./slack_configuration.json');
const {reqRes} = require('./app');

const app = new App({
  token: slackConfiguration.SLACK_BOT_TOKEN,
  signingSecret: slackConfiguration.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: slackConfiguration.APP_TOKEN,
});

reqRes(app);