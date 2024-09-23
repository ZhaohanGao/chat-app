import cron from 'cron';
import https from 'https';

const backendUrl = 'https://chat-app-7ory.onrender.com/api/users';

const job = new cron.CronJob('*/14 * * * *', function () {
    console.log('running a task every 14 minutes');
    https.get(backendUrl, (res) => {

    });
});

export default job;